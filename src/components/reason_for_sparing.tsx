type ReasonForSparingProps = {
  value: string;
  handleChange: (value: string) => void;
};

function ReasonForSparing({ value, handleChange }: ReasonForSparingProps) {
  return (
    <>
      <label htmlFor="reason_for_sparing">Reason for sparing</label>
      <textarea
        id="reason_for_sparing"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        cols={40}
        rows={5}
      ></textarea>
    </>
  );
}

export default ReasonForSparing;
