import { ComponentPropsWithoutRef } from "react";
import ErrorMessage from "./error_message";

type InputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "type" | "onChange"
> & {
  label?: string;
  handleChange?: (value: string) => void;
};

type InputTextProps =
  | (InputProps & {
      type: "text";
      validate?: (value: string) => string[];
    })
  | (InputProps & {
      type: "number";
      validate?: (value: number) => string[];
    });

function Label({ text, htmlFor }: { text?: string; htmlFor?: string }) {
  if (text === undefined) return null;

  return (
    <label className="input-text__label" htmlFor={htmlFor}>
      {text}
    </label>
  );
}

function InputText({
  type,
  label,
  id,
  value,
  className,
  validate,
  handleChange,
  ...otherProps
}: InputTextProps) {
  const controlClass = ["input-text__control"].concat(
    className === undefined ? [] : className.split(" ")
  );

  let errorMessages = [] as string[];

  if (value !== undefined && validate !== undefined) {
    if (type === "text") {
      errorMessages = validate(value as string);
    }
    if (type === "number") {
      errorMessages = validate(Number(value));
    }
  }

  const makeChange = handleChange === undefined ? () => {} : handleChange;

  return (
    <div className={controlClass.join(" ")}>
      <Label text={label} htmlFor={id} />

      <input
        type={type}
        className="input-text__input"
        id={id}
        value={value}
        onChange={(e) => makeChange(e.target.value)}
        {...otherProps}
      />

      <ErrorMessage messages={errorMessages} />
    </div>
  );
}

export default InputText;
