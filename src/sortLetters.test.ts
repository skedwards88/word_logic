import {sortLettersBy, sortMethods} from "./sortLetters.js";
import type {Letter} from "./Types.js";

test("sort by alphabetical", () => {
  expect(
    sortLettersBy(["E", "B", "A", "Z", "Y"], sortMethods.Alphabetical),
  ).toEqual(["A", "B", "E", "Y", "Z"]);
});

test("sort by vowels", () => {
  expect(sortLettersBy(["E", "B", "A", "Z", "Y"], sortMethods.Vowels)).toEqual([
    "A",
    "E",
    "Y",
    "B",
    "Z",
  ]);
});

test("sort by random", () => {
  // this test is less likely to be flaky with longer strings
  const input: Letter[] = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "Q",
    "A",
    "Z",
    "W",
    "S",
    "X",
    "E",
    "D",
    "C",
    "R",
    "F",
    "V",
    "T",
    "G",
    "B",
    "Y",
    "H",
    "N",
    "U",
    "J",
    "M",
    "I",
    "K",
    "O",
    "L",
    "P",
  ];
  expect(sortLettersBy(input, sortMethods.Random)).not.toEqual(input);
});

test("works on empty grid", () => {
  expect(sortLettersBy([], sortMethods.Alphabetical)).toEqual([]);
});
