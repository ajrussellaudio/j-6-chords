import { noteNumber } from "./noteNumber";

describe("noteNumber", () => {
  it("converts middle C to 60", () => {
    expect(noteNumber("C3")).toEqual(60);
  });

  it("converts F# above middle C to 66", () => {
    expect(noteNumber("F#3")).toEqual(66);
  });

  it("converts Ab above middle C to 68", () => {
    expect(noteNumber("Ab3")).toEqual(68);
  });

  it("converts bottom C to 0", () => {
    expect(noteNumber("C-2")).toEqual(0);
  });

  it("returns undefined if input is not a note", () => {
    expect(noteNumber("batman")).toEqual(undefined);
  });

  it("returns undefined for a partial match", () => {
    expect(noteNumber("B-4")).toEqual(undefined);
  });
});
