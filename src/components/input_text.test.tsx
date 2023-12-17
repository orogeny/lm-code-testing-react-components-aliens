import { fireEvent, render, screen } from "@testing-library/react";
import InputText from "./input_text";
import userEvent from "@testing-library/user-event";

describe("InputText", () => {
  test("no label displayed", () => {
    const labelText = "Fruit";

    render(<InputText type="text" id="fruit" />);

    const label = screen.queryByLabelText(labelText);

    expect(label).toBeNull();
  });

  test("displays label", () => {
    const labelText = "Fruit";

    render(<InputText type="text" id="fruit" label={labelText} />);

    const label = screen.getByLabelText(labelText);

    expect(label).toBeInTheDocument();
  });

  test("type of textbox", () => {
    render(<InputText type="text" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("type number", () => {
    render(<InputText type="number" />);

    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  test("text value is displayed", () => {
    render(<InputText type="text" value="Earth" />);

    expect(screen.getByDisplayValue("Earth")).toBeInTheDocument();
  });

  test("click label input has focus", async () => {
    const labelText = "Big 'ol nine";

    render(<InputText type="number" id="nine" label={labelText} />);

    const label = screen.getByLabelText(labelText);
    const input = screen.getByRole("spinbutton");

    await userEvent.click(label);

    expect(input).toHaveFocus();
  });

  test("handleChange is called", () => {
    const mockHandleChange = jest.fn();

    render(<InputText type="text" handleChange={mockHandleChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "Earth" },
    });

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  test("validate function is called", () => {
    const mockValidate = jest.fn();
    mockValidate.mockReturnValue([]);

    render(<InputText type="text" value="crunchy" validate={mockValidate} />);

    expect(mockValidate).toHaveBeenCalledTimes(1);
  });
});
