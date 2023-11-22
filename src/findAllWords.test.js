import {findAllWords} from "./findAllWords";
import {getTrie} from "./getTrie";

const commonWords = ["WALK", "CAMP", "QUIET", "LET"];
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

test("Easy mode, min length 4, square grid", () => {
  const letters = [
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
    letters: letters,
    numColumns: Math.sqrt(letters.length),
    numRows: Math.sqrt(letters.length),
    minWordLength: 4,
    easyMode: true,
    trie: trie,
  });
  const expected = ["CAMP", "QUIET"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});

test("Hard mode, min length 4, square grid", () => {
  const letters = [
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
    letters: letters,
    numColumns: Math.sqrt(letters.length),
    numRows: Math.sqrt(letters.length),
    minWordLength: 4,
    easyMode: false,
    trie: trie,
  });

  const expected = ["CAMP", "QUIET", "CAMPER", "SCAMPER"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});

test("Easy mode, min length 3, square grid", () => {
  const letters = [
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
    letters: letters,
    numColumns: Math.sqrt(letters.length),
    numRows: Math.sqrt(letters.length),
    minWordLength: 3,
    easyMode: true,
    trie: trie,
  });

  const expected = ["CAMP", "QUIET", "LET"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});

test("Hard mode, min length 3, square grid", () => {
  const letters = [
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
    letters: letters,
    numColumns: Math.sqrt(letters.length),
    numRows: Math.sqrt(letters.length),
    minWordLength: 3,
    easyMode: false,
    trie: trie,
  });

  const expected = ["CAMP", "QUIET", "CAMPER", "SCAMPER", "LET"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});

test("Easy mode, min length 4, wider grid", () => {
  const letters = [
    "O",
    "C",
    "QU",
    "I",
    "W",
    "S",
    "A",
    "E",
    "T",
    "A",
    "P",
    "M",
    "L",
    "T",
    "L",
    "P",
    "E",
    "R",
    "K",
    "K",
  ];
  const foundWords = findAllWords({
    letters: letters,
    numColumns: 5,
    numRows: 4,
    minWordLength: 4,
    easyMode: true,
    trie: trie,
  });
  const expected = ["CAMP", "QUIET", "WALK"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});

test("Easy mode, min length 4, taller grid", () => {
  const letters = [
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
    "W",
    "A",
    "L",
    "K",
  ];
  const foundWords = findAllWords({
    letters: letters,
    numColumns: 4,
    numRows: 5,
    minWordLength: 4,
    easyMode: true,
    trie: trie,
  });
  const expected = ["CAMP", "QUIET", "WALK"];

  expect(foundWords).toEqual(expect.arrayContaining(expected));
  expect(foundWords.length).toEqual(expected.length);
});
