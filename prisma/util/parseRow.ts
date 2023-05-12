import { load } from "cheerio";
import { noteNumber } from "./noteNumber";

export function parseRow(html: string) {
  const $ = load(`<table>${html}</table>`);

  const number = parseInt($("th[rowspan='2']:first-of-type").text());
  const genre = $("th[rowspan='2']:last-of-type").text().trim();

  const chords: Array<{ name: string; notes: number[] }> = [];

  $("td.highlight-red").each((_i, td) => {
    chords.push({ name: $(td).text(), notes: [] });
  });

  $("td:not(.highlight-red)").each((i, td) => {
    $(td)
      .children()
      .each((_, p) => {
        const note = noteNumber($(p).text());

        if (Number.isInteger(note)) {
          chords[i].notes.push(note as number);
        }
      });
    chords[i].notes.sort();
  });

  return { number, genre, chords };
}
