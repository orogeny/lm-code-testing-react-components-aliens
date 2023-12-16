import { fireEvent, render, screen } from "@testing-library/react";
import SpeciesName from "./species_name";

describe("SpeciesName", () => {
  test("renders label text", () => {
    render(
      <SpeciesName value={""} validate={() => []} handleChange={() => {}} />
    );
    const labelText = screen.getByLabelText(/Species Name/);
    expect(labelText).toBeInTheDocument();
  });

  test("renders input value", () => {
    render(
      <SpeciesName
        value={"Vogon"}
        validate={() => []}
        handleChange={() => {}}
      />
    );
    const inputText = screen.getByDisplayValue(/Vogon/);
    expect(inputText).toBeInTheDocument();
  });

  test("handleChange handles onChange", () => {
    const handleChange = jest.fn();

    render(
      <SpeciesName value={""} validate={() => []} handleChange={handleChange} />
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Vogon" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("valid, ok", () => {
    const mockValidate = jest.fn();

    mockValidate.mockReturnValue([]);

    const requiredProps = {
      value: "Vogon",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<SpeciesName {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toHaveLength(0);
  });

  test("invalid displays errors", () => {
    const errorList = [
      "must be between 3 and 32 characters",
      "no numbers or special characters allowed",
    ];

    const mockValidate = jest.fn();
    mockValidate.mockReturnValue(errorList);

    const requiredProps = {
      value: "a2",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<SpeciesName {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toHaveLength(errorList.length);

    errorList.forEach((msg) =>
      expect(screen.getByText(msg)).toBeInTheDocument()
    );
  });
});
