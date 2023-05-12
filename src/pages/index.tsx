import { ChordSet, PrismaClient } from "@prisma/client";
import { GetStaticProps } from "next";
import React from "react";

type HomeProps = {
  chordSets: ChordSet[];
};

const Home = ({ chordSets }: HomeProps) => {
  return (
    <ul>
      {chordSets.map((chordSet) => (
        <li key={chordSet.id}>
          {chordSet.number}. {chordSet.genre}
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();
  const chordSets = (await prisma.chordSet.findMany()).sort((chordSetA, chordSetB) => {
    return chordSetA.number - chordSetB.number;
  });

  return {
    props: { chordSets },
  };
};

export default Home;
