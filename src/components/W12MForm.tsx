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

type W12MFormData = {
  speciesName: string;
  planetName: string;
  numberOfBeings: number;
  whatIs2Plus2: string;
  reasonForSparing: string;
};

type W12MFormProps = {
  initialState?: W12MFormData;
  onSubmit?: (formData: W12MFormData) => void;
};

const W12MForm = ({ initialState, onSubmit }: W12MFormProps) => {
  const [species_name, set_species_name] = useState(
    initialState?.speciesName ?? ""
  );
  const [planet_name, set_planet_name] = useState(
    initialState?.planetName ?? ""
  );
  const [number_of_beings, set_number_of_beings] = useState(
    initialState?.numberOfBeings.toString() ?? ""
  );
  const [what_is_2_plus_2, set_what_is_2_plus_2] = useState(
    initialState?.whatIs2Plus2 ?? "4"
  );
  const [reason_for_sparing, set_reason_for_sparing] = useState(
    initialState?.reasonForSparing ?? ""
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit !== undefined) {
      onSubmit({
        speciesName: species_name,
        planetName: planet_name,
        numberOfBeings: Number(number_of_beings),
        whatIs2Plus2: what_is_2_plus_2,
        reasonForSparing: reason_for_sparing,
      });
    }
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

export { W12MForm, type W12MFormData };
