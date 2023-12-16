import ErrorMessage from "./error_message";

type NumberOfBeingsProps = {
  value: string;
  validate: (value: number) => string[];
  handleChange: (value: string) => void;
};

function NumberOfBeings({
  value,
  validate,
  handleChange,
}: NumberOfBeingsProps) {
  const errorMessages = validate(Number(value));

  return (
    <div>
      <label htmlFor="number_of_beings">Number of beings</label>
      <input
        type="number"
        id="number_of_beings"
        name="number_of_beings"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <ErrorMessage messages={errorMessages} />
    </div>
  );
}

export default NumberOfBeings;
