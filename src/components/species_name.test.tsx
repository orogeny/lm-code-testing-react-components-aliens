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
});
