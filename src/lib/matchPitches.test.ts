import { matchPitches } from "./matchPitches";

describe("matchPitches", () => {
  it("does not match a non-musical pitch", () => {
    expect(matchPitches("H")).toEqual({});
    expect(matchPitches("Hm")).toEqual({});
  });

  it.skip("does not match a non-musical string", () => {
    expect(matchPitches("Batman")).toEqual({});
  });

  it("matches the pitch of a major chord", () => {
    expect(matchPitches("C")).toEqual({ root: "C" });
  });

  it("matches the pitch of a sharp major chord", () => {
    expect(matchPitches("C#")).toEqual({ root: "C#" });
  });

  it("matches the pitch of a minor chord", () => {
    expect(matchPitches("Cm")).toEqual({ root: "C", quality: "m" });
  });

  it("matches the pitch of a dominant seventh chord", () => {
    expect(matchPitches("C7")).toEqual({ root: "C", quality: "7" });
  });

  it("matches the pitch of a major seventh chord", () => {
    expect(matchPitches("CM7")).toEqual({ root: "C", quality: "M7" });
  });

  it("matches the pitch of a suspended chord", () => {
    expect(matchPitches("Csus2")).toEqual({ root: "C", quality: "sus2" });
  });

  it("matches the pitch of an add chord", () => {
    expect(matchPitches("Cadd9")).toEqual({ root: "C", quality: "add9" });
  });

  it("matches the pitch of a diminished chord", () => {
    expect(matchPitches("Cdim")).toEqual({ root: "C", quality: "dim" });
  });

  it("matches the pitch of an augmented chord", () => {
    expect(matchPitches("Caug")).toEqual({ root: "C", quality: "aug" });
  });

  it("matches the pitch of a chord with flat fifth", () => {
    expect(matchPitches("C7b5")).toEqual({ root: "C", quality: "7b5" });
  });

  it("matches the pitch of a chord with sharp fifth", () => {
    expect(matchPitches("CM7#5")).toEqual({ root: "C", quality: "M7#5" });
  });

  it("matches the pitch of a slash chord", () => {
    expect(matchPitches("Fm6/G#")).toEqual({ root: "F", quality: "m6", bass: "G#" });
  });

  it("matches some crazy chords", () => {
    expect(matchPitches("A#6sus4/G#")).toEqual({ root: "A#", quality: "6sus4", bass: "G#" });
    expect(matchPitches("Am7sus2")).toEqual({ root: "A", quality: "m7sus2" });
  });
});
