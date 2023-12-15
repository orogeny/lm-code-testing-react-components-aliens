import ErrorMessage from "./error_message";

type WhatIs2Plus2Props = {
  value: string;
  validate: (value: string) => string[];
  handleChange: (value: string) => void;
};

function WhatIs2Plus2({ value, validate, handleChange }: WhatIs2Plus2Props) {
  const errorMessages = validate(value);

  return (
    <div>
      <label htmlFor="what_is_2_plus_2">What is 2 + 2</label>
      <select
        id="what_is_2_plus_2"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
      <ErrorMessage messages={errorMessages} />
    </div>
  );
}

export default WhatIs2Plus2;
