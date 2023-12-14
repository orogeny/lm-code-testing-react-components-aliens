import { FormEvent, useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberOfBeings from "./number_of_beings";
import WhatIs2Plus2 from "./what_is_2_plus_2";
import ReasonForSparing from "./reason_for_sparing";

const W12MForm = () => {
  const [species_name, set_species_name] = useState("");
  const [planet_name, set_planet_name] = useState("");
  const [number_of_beings, set_number_of_beings] = useState(0);
  const [what_is_2_plus_2, set_what_is_2_plus_2] = useState("");
  const [reason_for_sparing, set_reason_for_sparing] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="w12MForm">
      <W12MHeader />

      <form onSubmit={handleSubmit}>
        <SpeciesName
          value={species_name}
          handleChange={(value) => set_species_name((_) => value)}
        />
        <PlanetName
          value={planet_name}
          handleChange={(value) => set_planet_name((_) => value)}
        />
        <NumberOfBeings
          value={number_of_beings}
          handleChange={(value) => set_number_of_beings((_) => value)}
        />
        <WhatIs2Plus2
          value={what_is_2_plus_2}
          handleChange={(value) => set_what_is_2_plus_2((_) => value)}
        />
        <ReasonForSparing
          value={reason_for_sparing}
          handleChange={(value) => set_reason_for_sparing((_) => value)}
        />

        <button type="submit">Submit Form</button>
      </form>
    </section>
  );
};

export default W12MForm;
