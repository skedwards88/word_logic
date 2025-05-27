import type {Letter} from "./Types";

export function getLetterPool(words: string[]): Letter[] {
  const letterDistribution: Record<string, number> = {};
  let totalLetters = 0;

  // Get the letter counts
  for (const word of words) {
    const letters = word.split("");
    letters.forEach((letter) => {
      letterDistribution[letter] = letterDistribution[letter]
        ? (letterDistribution[letter] += 1)
        : 1;
      totalLetters += 1;
    });
  }

  // adjust for Qu
  const numQs = letterDistribution["Q"] ?? 0;
  const numUs = letterDistribution["U"] ?? 0;
  letterDistribution["U"] = numUs - numQs;
  letterDistribution["Qu"] = numQs;
  delete letterDistribution["Q"];

  // Remove some "s"s for plural bias
  // The .11 comes from:
  //   There are ~168676 "s" total
  //   About 74442 words ends in "s"
  //   Remove ~40% of that (18610)
  const numSs = letterDistribution["S"] ?? 0;
  letterDistribution["S"] = numSs - numSs * 0.11;

  // Convert the letter distribution to a rounded percentage, rounding up to 1
  const letterPercentages: Record<string, number> = {};
  for (const [letter, count] of Object.entries(letterDistribution)) {
    letterPercentages[letter] = Math.max(
      1,
      Math.round(100 * (count / totalLetters)),
    );
  }

  // Based on the percentages, build out a representative list of letters
  let representativeLetters: Letter[] = [];
  for (const letter in letterPercentages) {
    const letters = Array(letterPercentages[letter]).fill(letter);
    representativeLetters = representativeLetters.concat(letters);
  }

  return representativeLetters;
}
