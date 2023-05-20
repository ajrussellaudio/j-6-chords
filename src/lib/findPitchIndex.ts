const pitches = [
  ["C"],
  ["C#", "Db"],
  ["D"],
  ["D#", "Eb"],
  ["E"],
  ["F"],
  ["F#", "Gb"],
  ["G"],
  ["G#", "Ab"],
  ["A"],
  ["A#", "Bb"],
  ["B"],
];

export function findPitchIndex(inputPitch: string) {
  return pitches.findIndex((pitch) => pitch.includes(inputPitch));
}
