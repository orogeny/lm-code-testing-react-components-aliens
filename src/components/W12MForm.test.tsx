import { fireEvent, render, screen } from "@testing-library/react";
import { W12MForm, W12MFormData } from "./W12MForm";
import userEvent from "@testing-library/user-event";

describe("W12MForm", () => {
  test("renders form element", () => {
    // we can hold onto the object returned from render()
    // this object has a container property that we can destructure and inspect
    const { container } = render(<W12MForm />);

    // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
    // for example, the firstChild of our container should be our form element

    /* eslint-disable testing-library/no-node-access */
    expect(container.firstChild).toHaveClass("w12MForm");
  });

  test("onSubmit is called", () => {
    const mockOnSubmit = jest.fn();

    render(<W12MForm onSubmit={mockOnSubmit} />);

    const submitButton = screen.getByText("Submit Form");

    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  test("clicking submit returns initial state", async () => {
    const initialState = {
      speciesName: "Martian",
      planetName: "Mars",
      numberOfBeings: 12,
      whatIs2Plus2: "4",
      reasonForSparing: "Grok ye not?",
    };

    let capturedData;
    const submitHandler = (formData: W12MFormData) => {
      capturedData = formData;
    };

    const requiredProps = {
      initialState,
      onSubmit: submitHandler,
    };

    render(<W12MForm {...requiredProps} />);

    const submitButton = screen.getByText("Submit Form");

    await userEvent.click(submitButton);

    expect(capturedData).not.toBe(initialState);
    expect(capturedData).toEqual(initialState);
  });
});
