type SpeciesNameProps = {
  value: string;
  handleChange: (value: string) => void;
};

function SpeciesName({ value, handleChange }: SpeciesNameProps) {
  return (
    <div>
      <label htmlFor="species_name">Species Name</label>
      <input
        type="text"
        id="species_name"
        name="species_name"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SpeciesName;
