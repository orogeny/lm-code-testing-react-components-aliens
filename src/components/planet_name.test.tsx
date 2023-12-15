import { fireEvent, render, screen } from "@testing-library/react";
import PlanetName from "./planet_name";

describe("PlanetName", () => {
  test("renders label text", () => {
    render(<PlanetName value={""} handleChange={() => {}} />);
    const labelText = screen.getByLabelText(/Planet Name/);
    expect(labelText).toBeInTheDocument();
  });

  test("renders input value", () => {
    render(<PlanetName value={"Vogsphere"} handleChange={() => {}} />);
    const inputText = screen.getByDisplayValue(/Vogsphere/);
    expect(inputText).toBeInTheDocument();
  });

  test("handleChange handles onChange()", () => {
    const handleChange = jest.fn();

    render(<PlanetName value={""} handleChange={handleChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "Earth" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
