import ErrorMessage from "./error_message";

type SpeciesNameProps = {
  value: string;
  validate: (value: string) => string[];
  handleChange: (value: string) => void;
};

function SpeciesName({ value, validate, handleChange }: SpeciesNameProps) {
  const errorMessages = validate(value);

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
      <ErrorMessage messages={errorMessages} />
    </div>
  );
}

export default SpeciesName;
