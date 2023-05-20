import { findPitchIndex } from "./findPitchIndex";
import { matchPitches } from "./matchPitches";

function wrapAt<T>(list: Array<T>, index: number): T {
  if (index < 0) {
    return wrapAt(list, index + list.length);
  }
  return list[index % list.length];
}

function transpose(inputPitch: string, semitones: number) {
  const pitches = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  const oldPitchIndex = findPitchIndex(inputPitch);
  const newPitch = wrapAt(pitches, oldPitchIndex + semitones);

  return newPitch;
}

export function transposeChordName(name: string, semitones: number) {
  const { root, quality, bass } = matchPitches(name);

  if (!root) return;

  return [transpose(root, semitones), quality, bass && `/${transpose(bass, semitones)}`].filter(Boolean).join("");
}
