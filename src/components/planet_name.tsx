import ErrorMessage from "./error_message";

type PlanetNameProps = {
  value: string;
  validate: (value: string) => string[];
  handleChange: (value: string) => void;
};

function PlanetName({ value, validate, handleChange }: PlanetNameProps) {
  const errorMessages = validate(value);

  return (
    <div>
      <label htmlFor="planet_name">Planet Name</label>
      <input
        type="text"
        id="planet_name"
        name="planet_name"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <ErrorMessage messages={errorMessages} />
    </div>
  );
}

export default PlanetName;
