type PlanetNameProps = {
  value: string;
  handleChange: (value: string) => void;
};

function PlanetName({ value, handleChange }: PlanetNameProps) {
  return (
    <>
      <label htmlFor="planet_name">Planet Name</label>
      <input
        type="text"
        id="planet_name"
        name="planet_name"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}

export default PlanetName;
