import { validatePlanetName } from "./validate";

describe("validatePlanetName", () => {
  test("too long or short", () => {
    const tooLong = "a".repeat(50);
    const tooShort = "a";

    const error = ["must be between 2 and 49 characters"];

    expect(validatePlanetName(tooLong)).toEqual(error);
    expect(validatePlanetName(tooShort)).toEqual(error);
  });

  test("longest and shortest allowed", () => {
    expect(validatePlanetName("a2")).toEqual([]);
    expect(validatePlanetName("a".repeat(49))).toEqual([]);
  });

  test("no special characters", () => {
    const special = "What_ho";

    const error = ["no special characters allowed"];

    expect(validatePlanetName(special)).toEqual(error);
  });

  test("invalid length and non-alpha-numeric", () => {
    const errors = [
      "must be between 2 and 49 characters",
      "no special characters allowed",
    ];

    expect(validatePlanetName("!").sort()).toEqual(errors);
  });
});
