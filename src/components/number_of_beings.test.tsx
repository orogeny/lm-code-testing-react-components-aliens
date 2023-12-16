import { fireEvent, render, screen } from "@testing-library/react";
import NumberOfBeings from "./number_of_beings";

describe("NumberOfBeings", () => {
  test("renders label text", () => {
    render(
      <NumberOfBeings value={"0"} validate={() => []} handleChange={() => {}} />
    );
    const labelText = screen.getByLabelText(/Number of beings/);
    expect(labelText).toBeInTheDocument();
  });

  test("renders input value", () => {
    render(
      <NumberOfBeings
        value={"10"}
        validate={() => []}
        handleChange={() => {}}
      />
    );
    const inputText = screen.getByDisplayValue("10");
    expect(inputText).toBeInTheDocument();
  });

  test("handleChange handles onChange", () => {
    const handleChange = jest.fn();

    render(
      <NumberOfBeings
        value={"5"}
        validate={() => []}
        handleChange={handleChange}
      />
    );

    fireEvent.change(screen.getByRole("spinbutton"), {
      target: { value: "9" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("billion+ valid", () => {
    const mockValidate = jest.fn();

    mockValidate.mockReturnValue([]);

    const requiredProps = {
      value: "1000000000",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<NumberOfBeings {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toEqual([]);
  });

  test("below billion errors", () => {
    const mockValidate = jest.fn();

    const testErrors = ["below a billion need not apply"];

    mockValidate.mockReturnValue(testErrors);

    const requiredProps = {
      value: "999999999",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<NumberOfBeings {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toHaveLength(1);
    expect(screen.getByText(testErrors[0])).toBeInTheDocument();
  });
});
