import { findAllWords } from "./findAllWords";
import { getTrie } from "./getTrie";

const  commonWords = ["WALK", "CAMP", "QUIET", "LET"];
const uncommonWords = [
  "NATURE",
  "CAMPERS",
  "SOLITUDE",
  "HAPPINESS",
  "CAMPERVANS",
  "SCAMPER",
  "SCAMPERS",
  "CAMPER",
];
const trie = getTrie(commonWords, uncommonWords);

test("Easy mode, min length 4", () => {
  const grid = [
    "O",
    "C",
    "QU",
    "I",
    "S",
    "A",
    "E",
    "T",
    "P",
    "M",
    "L",
    "T",
    "P",
    "E",
    "R",
    "K",
  ];
  const foundWords = findAllWords({
    grid: grid,
    minWordLength: 4,
    easyMode: true,
    trie: trie,
  });
  const expected = ["CAMP", "QUIET"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});

test("Hard mode, min length 4", () => {
  const grid = [
    "O",
    "C",
    "QU",
    "I",
    "S",
    "A",
    "E",
    "T",
    "P",
    "M",
    "L",
    "T",
    "P",
    "E",
    "R",
    "K",
  ];
  const foundWords = findAllWords({
    grid: grid,
    minWordLength: 4,
    easyMode: false,
    trie: trie,
  });

  const expected = ["CAMP", "QUIET", "CAMPER", "SCAMPER"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});

test("Easy mode, min length 3", () => {
  const grid = [
    "O",
    "C",
    "QU",
    "I",
    "S",
    "A",
    "E",
    "T",
    "P",
    "M",
    "L",
    "T",
    "P",
    "E",
    "R",
    "K",
  ];
  const foundWords = findAllWords({
    grid: grid,
    minWordLength: 3,
    easyMode: true,
    trie: trie,
  });

  const expected = ["CAMP", "QUIET", "LET"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});

test("Hard mode, min length 3", () => {
  const grid = [
    "O",
    "C",
    "QU",
    "I",
    "S",
    "A",
    "E",
    "T",
    "P",
    "M",
    "L",
    "T",
    "P",
    "E",
    "R",
    "K",
  ];
  const foundWords = findAllWords({
    grid: grid,
    minWordLength: 3,
    easyMode: false,
    trie: trie,
  });

  const expected = ["CAMP", "QUIET", "CAMPER", "SCAMPER", "LET"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});
