import { findPitchIndex } from "./findPitchIndex";

describe("findPitchIndex", () => {
  it("finds the index of a natural note", () => {
    expect(findPitchIndex("C")).toEqual(0);
    expect(findPitchIndex("B")).toEqual(11);
  });

  it("finds the index of a sharp note", () => {
    expect(findPitchIndex("F#")).toEqual(6);
  });

  it("finds the index of a flat note", () => {
    expect(findPitchIndex("Ab")).toEqual(8);
  });
});
