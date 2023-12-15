import { validateWhatIs2Plus2 } from "./validate";

describe("validateWhatIs2Plus2", () => {
  test("Equals 4", () => {
    expect(validateWhatIs2Plus2("4")).toEqual([]);
  });

  test("Not 4", () => {
    expect(validateWhatIs2Plus2("Not 4")).toEqual([
      "4 is the only viable answer",
    ]);
  });
});
