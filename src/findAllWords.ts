import {getSurroundingIndexes} from "./getSurroundingIndexes.js";
import {isKnown} from "./isKnown.js";
import type {Letter, LetterQu, TrieNode} from "./Types.js";

export function findAllWordIndexes({
  letters,
  numColumns,
  numRows,
  minWordLength,
  maxWordLength = 30,
  easyMode,
  trie,
}: {
  letters: LetterQu[] | Letter[];
  numColumns: number;
  numRows: number;
  minWordLength: number;
  maxWordLength?: number;
  easyMode: boolean;
  trie: TrieNode;
}): number[][] {
  const foundWordIndexes: number[][] = [];

  const neighborIndexes = letters.map((_, index) =>
    getSurroundingIndexes({index: index, numColumns, numRows}),
  );

  function checkSurrounding(
    currentIndex: number,
    wordIndexes: number[],
    visitedIndexes: number[],
  ): void {
    const surroundingIndexes = neighborIndexes[currentIndex];
    for (const surroundingIndex of surroundingIndexes) {
      // if the index has already been used, skip
      if (visitedIndexes.includes(surroundingIndex)) {
        continue;
      }
      const newWordIndexes = [...wordIndexes, surroundingIndex];
      const newWord = newWordIndexes.map((index) => letters[index]).join("");
      const {isPartial, isWord, isEasy} = isKnown(newWord, trie);

      if (easyMode) {
        if (
          isEasy &&
          newWord.length >= minWordLength &&
          newWord.length <= maxWordLength
        ) {
          foundWordIndexes.push(newWordIndexes);
        }
      } else {
        if (
          isWord &&
          newWord.length >= minWordLength &&
          newWord.length <= maxWordLength
        ) {
          foundWordIndexes.push(newWordIndexes);
        }
      }
      if (isPartial) {
        checkSurrounding(
          surroundingIndex,
          newWordIndexes,
          visitedIndexes.concat(surroundingIndex),
        );
      }
    }
  }

  for (let startingIndex = 0; startingIndex < letters.length; startingIndex++) {
    checkSurrounding(startingIndex, [startingIndex], [startingIndex]);
  }

  return foundWordIndexes;
}

export function findAllWords({
  letters,
  numColumns,
  numRows,
  minWordLength,
  maxWordLength = 30,
  easyMode,
  trie,
}: {
  letters: LetterQu[] | Letter[];
  numColumns: number;
  numRows: number;
  minWordLength: number;
  maxWordLength?: number;
  easyMode: boolean;
  trie: TrieNode;
}): string[] {
  const foundWordIndexes = findAllWordIndexes({
    letters: letters,
    numColumns: numColumns,
    numRows: numRows,
    minWordLength: minWordLength,
    maxWordLength: maxWordLength,
    easyMode: easyMode,
    trie: trie,
  });
  const foundWords = foundWordIndexes.map((indexList) =>
    indexList.map((index) => letters[index]).join(""),
  );
  const uniqueFoundWords = new Set(foundWords);

  return Array.from(uniqueFoundWords).sort();
}
