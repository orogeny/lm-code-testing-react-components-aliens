import { FormEvent, useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberOfBeings from "./number_of_beings";
import WhatIs2Plus2 from "./what_is_2_plus_2";
import ReasonForSparing from "./reason_for_sparing";
import {
  validateNumberOfBeings,
  validatePlanetName,
  validateReasonForSparing,
  validateSpeciesName,
  validateWhatIs2Plus2,
} from "../validate/validate";

const W12MForm = () => {
  const [species_name, set_species_name] = useState("");
  const [planet_name, set_planet_name] = useState("");
  const [number_of_beings, set_number_of_beings] = useState("");
  const [what_is_2_plus_2, set_what_is_2_plus_2] = useState("4");
  const [reason_for_sparing, set_reason_for_sparing] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const state = {
      speciesName: species_name,
      planetName: planet_name,
      numberOfBeings: number_of_beings,
      whatIs2Plus2: what_is_2_plus_2,
      ReasonForSparing: reason_for_sparing,
    };

    console.log("Form state: ", state);
  };

  return (
    <section className="w12MForm">
      <W12MHeader />

      <form onSubmit={handleSubmit}>
        <SpeciesName
          value={species_name}
          validate={validateSpeciesName}
          handleChange={(value) => set_species_name((_) => value)}
        />
        <PlanetName
          value={planet_name}
          validate={validatePlanetName}
          handleChange={(value) => set_planet_name((_) => value)}
        />
        <NumberOfBeings
          value={number_of_beings}
          validate={validateNumberOfBeings}
          handleChange={(value) => set_number_of_beings((_) => value)}
        />
        <WhatIs2Plus2
          value={what_is_2_plus_2}
          validate={validateWhatIs2Plus2}
          handleChange={(value) => set_what_is_2_plus_2((_) => value)}
        />
        <ReasonForSparing
          value={reason_for_sparing}
          validate={validateReasonForSparing}
          handleChange={(value) => set_reason_for_sparing((_) => value)}
        />

        <button type="submit">Submit Form</button>
      </form>
    </section>
  );
};

export default W12MForm;
