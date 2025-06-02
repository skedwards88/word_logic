import {shuffleArray} from "./shuffleArray.js";
import type {Letter, SortMethod} from "./Types.js";

function sortVowels(letters: Letter[]): Letter[] {
  const vowels: Letter[] = [];
  const consonants: Letter[] = [];
  for (let index = 0; index < letters.length; index++) {
    if (["A", "E", "I", "O", "U", "Y"].includes(letters[index])) {
      vowels.push(letters[index]);
    } else {
      consonants.push(letters[index]);
    }
  }
  vowels.sort();
  consonants.sort();
  return [...vowels, ...consonants];
}

export const sortMethods = {
  Alphabetical: "Alphabetical",
  Vowels: "Vowels",
  None: "None",
};

export function sortLettersBy(letters: Letter[], sortBy: SortMethod): Letter[] {
  let lettersCopy = [...letters];
  if (sortBy === sortMethods.Alphabetical) {
    lettersCopy = lettersCopy.sort();
  } else if (sortBy === sortMethods.Vowels) {
    lettersCopy = sortVowels(lettersCopy);
  } else {
    lettersCopy = shuffleArray(lettersCopy);
  }
  return lettersCopy;
}
