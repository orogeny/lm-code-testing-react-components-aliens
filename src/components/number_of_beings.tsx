type NumberOfBeingsProps = {
  value: number;
  handleChange: (value: number) => void;
};

function NumberOfBeings({ value, handleChange }: NumberOfBeingsProps) {
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
    </div>
  );
}

export default NumberOfBeings;
