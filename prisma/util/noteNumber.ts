export function noteNumber(note: string) {
  const re = /([A-G]#?)(-?\d)/;

  const matches = note.match(re);

  if (!matches) return;

  const notePitch = matches[1];
  const octave = parseInt(matches[2]);

  if (octave < -2) return;

  const pitches = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  const root = (octave + 2) * 12;
  const pitchNumber = pitches.findIndex((pitch) => pitch === notePitch);

  return root + pitchNumber;
}
