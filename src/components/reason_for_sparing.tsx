import ErrorMessage from "./error_message";

type ReasonForSparingProps = {
  value: string;
  validate: (value: string) => string[];
  handleChange: (value: string) => void;
};

function ReasonForSparing({
  value,
  validate,
  handleChange,
}: ReasonForSparingProps) {
  const errorMessages = validate(value);

  return (
    <div>
      <label htmlFor="reason_for_sparing">Reason for sparing</label>
      <textarea
        id="reason_for_sparing"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        cols={40}
        rows={5}
      ></textarea>
      <ErrorMessage messages={errorMessages} />
    </div>
  );
}

export default ReasonForSparing;
