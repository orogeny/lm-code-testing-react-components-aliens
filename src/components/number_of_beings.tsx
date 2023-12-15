import ErrorMessage from "./error_message";

type NumberOfBeingsProps = {
  value: number;
  validate: (value: number) => string[];
  handleChange: (value: number) => void;
};

function NumberOfBeings({
  value,
  validate,
  handleChange,
}: NumberOfBeingsProps) {
  const errorMessages = validate(value);

  return (
    <div>
      <label htmlFor="number_of_beings">Number of beings</label>
      <input
        type="number"
        id="number_of_beings"
        name="number_of_beings"
        value={value}
        onChange={(e) => handleChange(e.target.valueAsNumber)}
      />
      <ErrorMessage messages={errorMessages} />
    </div>
  );
}

export default NumberOfBeings;
