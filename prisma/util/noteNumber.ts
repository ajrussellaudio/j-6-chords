import { findPitchIndex } from "../../src/lib/findPitchIndex";

export function noteNumber(note: string) {
  const re = /([A-G][b#]?)(-?\d)/;

  const matches = note.match(re);

  if (!matches) return;

  const pitch = matches[1];
  const octave = parseInt(matches[2]);

  if (octave < -2) return;

  const root = (octave + 2) * 12;
  const pitchNumber = findPitchIndex(pitch);

  return root + pitchNumber;
}
