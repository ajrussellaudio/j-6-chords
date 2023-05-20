import { transposeChordName } from "./transposeChordName";

describe("transposeChordName", () => {
  it("does not transpose a non-musical string", () => {
    expect(transposeChordName("H", 1)).toEqual(undefined);
  });

  it("transposes C to C#", () => {
    expect(transposeChordName("C", 1)).toEqual("C#");
  });

  it("transposes A to F", () => {
    expect(transposeChordName("A", -4)).toEqual("F");
  });

  it("transposes C# to D", () => {
    expect(transposeChordName("C#", 1)).toEqual("D");
  });

  it("transposes Db to D", () => {
    expect(transposeChordName("Db", 1)).toEqual("D");
  });

  it("transposes Dm to Em", () => {
    expect(transposeChordName("Dm", 2)).toEqual("Em");
  });

  it("transposes F#M7#9 up to CM7#9", () => {
    expect(transposeChordName("F#M7#9", 6)).toEqual("CM7#9");
  });

  it("transposes Dsus2 down to Asus2", () => {
    expect(transposeChordName("Dsus2", -5)).toEqual("Asus2");
  });

  it("transposes Am7/E to Bm7/F#", () => {
    expect(transposeChordName("Am7/E", 2)).toEqual("Bm7/F#");
  });
});
