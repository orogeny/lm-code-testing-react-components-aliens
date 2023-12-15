function validateSpeciesName(str: string = "") {
  const errors = [] as string[];

  if (str.length < 3 || str.length > 32) {
    errors.push("must be between 3 and 32 characters");
  }

  if (/[^A-Za-z]/.test(str)) {
    errors.push("no numbers or special characters allowed");
  }

  return errors;
}

function validatePlanetName(str: string = "") {
  const errors = [] as string[];

  if (str.length < 2 || str.length > 49) {
    errors.push("must be between 2 and 49 characters");
  }

  if (/[^0-9A-Za-z]/.test(str)) {
    errors.push("no special characters allowed");
  }

  return errors;
}

function validateWhatIs2Plus2(str: string = "") {
  return str === "4" ? [] : ["4 is the only viable answer"];
}

function validateNumberOfBeings(value: number = 0) {
  return value >= 1_000_000_000 ? [] : ["below a billion need not apply"];
}

function validateReasonForSparing(str: string = "") {
  if (str.length < 17 || str.length > 153) {
    return ["must be 17 to 153 characters"];
  }

  return [];
}

export {
  validatePlanetName,
  validateSpeciesName,
  validateNumberOfBeings,
  validateWhatIs2Plus2,
  validateReasonForSparing,
};
