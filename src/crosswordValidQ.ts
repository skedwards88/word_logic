import {isKnown} from "./isKnown.js";
import {transposeGrid} from "./transposeGrid.js";
import type {TrieNode} from "./Types.js";

function getSurroundingLetterIndexes({
  startingIndex,
  grid,
  alreadyFoundIndexes,
}: {
  startingIndex: [number, number];
  grid: string[][];
  alreadyFoundIndexes: [number, number][];
}): [number, number][] {
  const surroundingIndexes: [
    [number, number],
    [number, number],
    [number, number],
    [number, number],
  ] = [
    [startingIndex[0] - 1, startingIndex[1]],
    [startingIndex[0] + 1, startingIndex[1]],
    [startingIndex[0], startingIndex[1] - 1],
    [startingIndex[0], startingIndex[1] + 1],
  ];

  const surroundingLetterIndexes = [];
  for (let index = 0; index < surroundingIndexes.length; index++) {
    // If there is a letter at the surrounding index
    if (grid?.[surroundingIndexes[index][0]]?.[surroundingIndexes[index][1]]) {
      // and if the surrounding index was not found already
      if (
        !alreadyFoundIndexes.some(
          (alreadyFoundIndex) =>
            alreadyFoundIndex[0] === surroundingIndexes[index][0] &&
            alreadyFoundIndex[1] === surroundingIndexes[index][1],
        )
      ) {
        surroundingLetterIndexes.push(surroundingIndexes[index]);
      }
    }
  }
  return surroundingLetterIndexes;
}

function getFirstPopulatedIndex(
  grid: string[][],
): [number, number] | undefined {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      if (grid[rowIndex][colIndex]) {
        return [rowIndex, colIndex];
      }
    }
  }

  return undefined;
}

function isSingleGroupingQ(grid: string[][]): boolean {
  const numLetters = grid.flatMap((i) => i).filter((i) => i).length;

  // start at an index with a letter
  // recursively, check top,bottom,left,right of the letter for any connected letter
  // to generate a list of all of the letters that are connected
  // then compare with the indexes of all the letters to make sure the same
  const startingIndex = getFirstPopulatedIndex(grid);

  if (startingIndex === undefined) {
    return false;
  }

  let connectionsToCheckForConnections = getSurroundingLetterIndexes({
    startingIndex: startingIndex,
    grid: grid,
    alreadyFoundIndexes: [startingIndex],
  });
  let connectedIndexes = [startingIndex, ...connectionsToCheckForConnections];

  let count = 0;
  while (connectionsToCheckForConnections.length && count < 100) {
    count++;
    const surroundingIndex = connectionsToCheckForConnections.pop();

    // TS is too dumb to realize that the connectionsToCheckForConnections.length ensures that this won't be undefined
    if (surroundingIndex === undefined) break;

    const newSurroundingIndexes = getSurroundingLetterIndexes({
      startingIndex: surroundingIndex,
      grid: grid,
      alreadyFoundIndexes: connectedIndexes,
    });
    connectionsToCheckForConnections = [
      ...connectionsToCheckForConnections,
      ...newSurroundingIndexes,
    ];
    connectedIndexes = [...connectedIndexes, ...newSurroundingIndexes];
  }

  return numLetters === connectedIndexes.length;
}

export function crosswordValidQ({
  grid,
  trie,
  exceptedWords = [],
}: {
  grid: string[][];
  trie: TrieNode;
  exceptedWords?: string[];
}): {gameIsSolved: boolean; reason: string} {
  const isSingleGrouping = isSingleGroupingQ(grid);
  if (!isSingleGrouping) {
    return {
      gameIsSolved: false,
      reason: "All of the letters must connect",
    };
  }

  const transposedGrid = transposeGrid(grid);
  const jointGrid = [...grid, ...transposedGrid];
  for (let rowIndex = 0; rowIndex < jointGrid.length; rowIndex++) {
    let currentWord = "";
    for (
      let characterIndex = 0;
      characterIndex < jointGrid[rowIndex].length;
      characterIndex++
    ) {
      const character = jointGrid[rowIndex][characterIndex];
      // If a letter, append to current word
      if (character.match("^[A-Z]$")) {
        currentWord += character;
      }

      // if the word is complete (either we are at the end of the row or at a non-letter)
      // and longer than one letter
      // then
      // verify the word
      if (
        currentWord &&
        (characterIndex === jointGrid[rowIndex].length - 1 ||
          !character.match("^[A-Z]$"))
      ) {
        if (currentWord.length > 1) {
          // If the word is one of the excepted words, always consider it valid.
          // Otherwise, check whether it is a word in the trie.
          let isWord = exceptedWords.includes(currentWord);
          if (!isWord) {
            ({isWord} = isKnown(currentWord, trie));
          }

          if (!isWord) {
            return {
              gameIsSolved: false,
              reason: `Unknown word ${currentWord}`,
            };
          }
        }

        currentWord = "";
      }
    }
  }
  return {gameIsSolved: true, reason: ""};
}
