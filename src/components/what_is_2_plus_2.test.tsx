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

  test("valid, no errors", () => {
    const mockValidate = jest.fn();

    mockValidate.mockReturnValue([]);

    const requiredProps = {
      value: "4",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<WhatIs2Plus2 {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toHaveLength(0);
  });

  test("invalid errors displayed", () => {
    const errorList = ["4 is the only viable answer"];

    const mockValidate = jest.fn();

    mockValidate.mockReturnValue(errorList);

    const requiredProps = {
      value: "Not 4",
      validate: mockValidate,
      handleChange: () => {},
    };

    render(<WhatIs2Plus2 {...requiredProps} />);

    const errors = screen.queryAllByRole("listitem");

    expect(errors).toHaveLength(errorList.length);

    errorList.forEach((msg) =>
      expect(screen.getByText(msg)).toBeInTheDocument()
    );
  });
});
