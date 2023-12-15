import { validateSpeciesName } from "./validate";

describe("validateSpeciesName", () => {
  test("too long or short", () => {
    const tooLong = "a".repeat(33);
    const tooShort = "Me";

    const error = ["must be between 3 and 32 characters"];

    expect(validateSpeciesName(tooLong)).toEqual(error);
    expect(validateSpeciesName(tooShort)).toEqual(error);
  });

  test("longest and shortest allowed", () => {
    const longest = "a".repeat(32);
    const shortest = "Elk";

    expect(validateSpeciesName(longest)).toEqual([]);
    expect(validateSpeciesName(shortest)).toEqual([]);
  });

  test("no numeric characters", () => {
    const cornet = "Flake99";

    const error = ["no numbers or special characters allowed"];

    expect(validateSpeciesName(cornet)).toEqual(error);
  });

  test("no special characters", () => {
    const special = "What_ho";

    const error = ["no numbers or special characters allowed"];

    expect(validateSpeciesName(special)).toEqual(error);
  });

  test("invalid length and non-alpha", () => {
    const errors = [
      "must be between 3 and 32 characters",
      "no numbers or special characters allowed",
    ];

    expect(validateSpeciesName("a2").sort()).toEqual(errors);
  });
});
