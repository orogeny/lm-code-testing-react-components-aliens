type WhatIs2Plus2Props = {
  value: string;
  handleChange: (value: string) => void;
};

function WhatIs2Plus2({ value, handleChange }: WhatIs2Plus2Props) {
  return (
    <div>
      <label htmlFor="what_is_2_plus_2">What is 2 + 2</label>
      <select
        id="what_is_2_plus_2"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
    </div>
  );
}

export default WhatIs2Plus2;
