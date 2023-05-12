import { AnyNode, Cheerio, CheerioAPI } from "cheerio";

export function mapRowPairs($: CheerioAPI, cb: (...args: any[]) => any) {
  const pairs: Cheerio<AnyNode>[] = [];
  $("tr").each((i, row) => {
    const i_over_2 = Math.floor(i / 2);
    if (!pairs[i_over_2]) pairs[i_over_2] = $();
    pairs[i_over_2] = pairs[i_over_2].add(row);
  });
  return pairs.map((pair) => cb(pair));
}
