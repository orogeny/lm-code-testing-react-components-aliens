import { fireEvent, render, screen } from "@testing-library/react";
import ReasonForSparing from "./reason_for_sparing";

describe("ReasonForSparing", () => {
  test("renders label text", () => {
    render(
      <ReasonForSparing
        value={""}
        validate={() => []}
        handleChange={() => {}}
      />
    );
    const labelText = screen.getByLabelText(/Reason for sparing/);
    expect(labelText).toBeInTheDocument();
  });

  test("render input value", () => {
    render(
      <ReasonForSparing
        value={"Crab population would explode"}
        validate={() => []}
        handleChange={() => {}}
      />
    );
    const inputText = screen.getByDisplayValue(
      /crab population would explode/i
    );
    expect(inputText).toBeInTheDocument();
  });

  test("handleChange handles onChange", () => {
    const handleChange = jest.fn();

    render(
      <ReasonForSparing
        value={""}
        validate={() => []}
        handleChange={handleChange}
      />
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "No more fish left" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("valid, no errors", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([]);

    const requiredProps = {
      value: "Do we need a reason?",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<ReasonForSparing {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toHaveLength(0);
  });

  test("invalid error displayed", () => {
    const errorList = ["must be 17 to 153 characters"];

    const mockValidate = jest.fn();
    mockValidate.mockReturnValue(errorList);

    const requiredProps = {
      value: "Um?",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<ReasonForSparing {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toHaveLength(1);

    errorList.forEach((msg) =>
      expect(screen.getByText(msg)).toBeInTheDocument()
    );
  });
});
