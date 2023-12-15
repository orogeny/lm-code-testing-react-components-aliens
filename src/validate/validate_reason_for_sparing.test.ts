import { validateReasonForSparing } from "./validate";

describe("validateReasonForSparing", () => {
  test("17 to 153 characters OK", () => {
    const shortest = "\t\n\r" + "a".repeat(14);
    const longest = "a".repeat(153);

    expect(validateReasonForSparing(shortest)).toEqual([]);
    expect(validateReasonForSparing(longest)).toEqual([]);
  });

  test("too long or short", () => {
    expect(validateReasonForSparing("a".repeat(16))).toEqual([
      "must be 17 to 153 characters",
    ]);
    expect(validateReasonForSparing("a".repeat(154))).toEqual([
      "must be 17 to 153 characters",
    ]);
  });
});
