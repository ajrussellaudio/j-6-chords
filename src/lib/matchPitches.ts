export function matchPitches(test: string): { root?: string; quality?: string; bass?: string } {
  const re = /^(?<root>[A-G][#b]?)(?<quality>[\w\d#()]*(?:\/[b#\d]*)?)?(?:\/(?<bass>[A-G][b#]?))?$/;
  return test.match(re)?.groups || {};
}
