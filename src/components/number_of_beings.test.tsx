import { fireEvent, render, screen } from "@testing-library/react";
import NumberOfBeings from "./number_of_beings";

describe("NumberOfBeings", () => {
  test("renders label text", () => {
    render(
      <NumberOfBeings value={0} validate={() => []} handleChange={() => {}} />
    );
    const labelText = screen.getByLabelText(/Number of beings/);
    expect(labelText).toBeInTheDocument();
  });

  test("renders input value", () => {
    render(
      <NumberOfBeings value={10} validate={() => []} handleChange={() => {}} />
    );
    const inputText = screen.getByDisplayValue("10");
    expect(inputText).toBeInTheDocument();
  });

  test("handleChange handles onChange", () => {
    const handleChange = jest.fn();

    render(
      <NumberOfBeings
        value={5}
        validate={() => []}
        handleChange={handleChange}
      />
    );

    fireEvent.change(screen.getByRole("spinbutton"), {
      target: { value: "9" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
