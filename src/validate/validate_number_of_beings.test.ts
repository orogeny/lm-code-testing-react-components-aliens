import { validateNumberOfBeings } from "./validate";

describe("validateNumberOfBeings", () => {
  test("billion+", () => {
    expect(validateNumberOfBeings(999_999_999)).toEqual([
      "below a billion need not apply",
    ]);
    expect(validateNumberOfBeings(1_000_000_000)).toEqual([]);
  });
});
