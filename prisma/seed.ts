import { PrismaClient } from "@prisma/client";
import { load } from "cheerio";
import { mapRowPairs } from "./util/mapRowPairs";
import { parseRow } from "./util/parseRow";

async function fetchHtml() {
  const response = await fetch("https://static.roland.com/manuals/J-6_manual_v102/eng/28645807.html");
  return response.text();
}

function parseHtml(html: string) {
  return mapRowPairs(load(html), parseRow);
}

const prisma = new PrismaClient();

async function main() {
  await prisma.chordSet.deleteMany();
  await prisma.chord.deleteMany();

  parseHtml(await fetchHtml())
    .filter((chordSet) => Number.isInteger(chordSet.number))
    .forEach(async (chordSet) => {
      await prisma.chordSet.create({
        data: {
          ...chordSet,
          chords: {
            create: chordSet.chords,
          },
        },
      });
    });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
