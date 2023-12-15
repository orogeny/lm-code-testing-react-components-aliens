import { fireEvent, render, screen } from "@testing-library/react";
import WhatIs2Plus2 from "./what_is_2_plus_2";

describe("WhatIs2Plus2", () => {
  test("renders label text", () => {
    render(
      <WhatIs2Plus2 value={"4"} validate={() => []} handleChange={() => {}} />
    );
    const labelText = screen.getByLabelText("What is 2 + 2");
    expect(labelText).toBeInTheDocument();
  });

  test("renders selected value", () => {
    render(
      <WhatIs2Plus2
        value={"Not 4"}
        validate={() => []}
        handleChange={() => {}}
      />
    );
    const combobox = screen.getByDisplayValue("Not 4");

    expect(combobox).toBeInTheDocument();
  });

  test("onChange event is handled", () => {
    const handleChange = jest.fn();

    render(
      <WhatIs2Plus2
        value={"4"}
        validate={() => []}
        handleChange={handleChange}
      />
    );

    const select = screen.getByRole("combobox");

    fireEvent.change(select, {
      target: { value: "Not 4" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
