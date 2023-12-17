import { render, screen } from "@testing-library/react";
import ErrorMessage from "./error_message";

describe("ErrorMessage", () => {
  test("no errors, not displayed", () => {
    render(<ErrorMessage messages={[]} />);

    expect(screen.queryByRole("list")).toBeNull();
  });

  test("all errors reported", () => {
    const errorList = ["Error number 1", "Error number 2"];

    render(<ErrorMessage messages={errorList} />);

    errorList.forEach((msg) =>
      expect(screen.getByText(msg)).toBeInTheDocument()
    );
  });
});
