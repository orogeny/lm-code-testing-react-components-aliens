import ErrorMessage from "./error_message";

type WhatIs2Plus2Props = {
  value: string;
  validate: (value: string) => string[];
  handleChange: (value: string) => void;
};

function WhatIs2Plus2({ value, validate, handleChange }: WhatIs2Plus2Props) {
  const errorMessages = validate(value);

  const options = [
    { label: "4", value: "4" },
    { label: "Not 4", value: "Not 4" },
  ];

  return (
    <div>
      <label htmlFor="what_is_2_plus_2">What is 2 + 2</label>
      <select
        id="what_is_2_plus_2"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage messages={errorMessages} />
    </div>
  );
}

export default WhatIs2Plus2;
