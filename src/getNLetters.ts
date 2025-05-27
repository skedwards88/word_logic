import {shuffleArray} from "./shuffleArray.js";
import type seedrandom from "seedrandom";
import type { Letter } from "./Types.js";

export function getNLetters(
  numLetters: number,
  letterPool: Letter[],
  pseudoRandomGenerator?: seedrandom.PRNG,
): Letter[] {
  // Given a distribution of letters,
  // choose n letters without substitution

  const shuffledLetters = shuffleArray(letterPool, pseudoRandomGenerator);

  const numFullPools = Math.max(
    0,
    Math.floor(numLetters / shuffledLetters.length),
  );
  const numExtra = numLetters - numFullPools * shuffledLetters.length;

  let chosenLetters = shuffledLetters.slice(0, numExtra);
  for (let index = 0; index < numFullPools; index++) {
    chosenLetters.push(...shuffledLetters);
  }

  chosenLetters = shuffleArray(chosenLetters);

  return chosenLetters;
}
