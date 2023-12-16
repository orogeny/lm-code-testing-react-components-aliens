import { fireEvent, render, screen } from "@testing-library/react";
import PlanetName from "./planet_name";

describe("PlanetName", () => {
  test("renders label text", () => {
    render(
      <PlanetName value={""} validate={() => []} handleChange={() => {}} />
    );
    const labelText = screen.getByLabelText(/Planet Name/);
    expect(labelText).toBeInTheDocument();
  });

  test("renders input value", () => {
    render(
      <PlanetName
        value={"Vogsphere"}
        validate={() => []}
        handleChange={() => {}}
      />
    );
    const inputText = screen.getByDisplayValue(/Vogsphere/);
    expect(inputText).toBeInTheDocument();
  });

  test("handleChange handles onChange()", () => {
    const handleChange = jest.fn();

    render(
      <PlanetName value={""} validate={() => []} handleChange={handleChange} />
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "Earth" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("valid, no errors", () => {
    const mockValidate = jest.fn();

    mockValidate.mockReturnValue([]);

    const requiredProps = {
      value: "Elk",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<PlanetName {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toHaveLength(0);
  });

  test("errors are displayed", () => {
    const errorList = [
      "must be between 3 and 32 characters",
      "no numbers or special characters allowed",
    ];

    const mockValidate = jest.fn();

    mockValidate.mockReturnValue(errorList);

    const requiredProps = {
      value: "A!",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<PlanetName {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toHaveLength(2);

    errorList.forEach((msg) =>
      expect(screen.getByText(msg)).toBeInTheDocument()
    );
  });
});
