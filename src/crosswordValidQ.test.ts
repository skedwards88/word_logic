import {crosswordValidQ} from "./crosswordValidQ.js";
import {getTrie} from "./getTrie.js";

const trie = getTrie(["AND", "CAT"], ["DOG"]);

test("false if not all letters are connected", () => {
  const grid = [
    ["A", "N", "D", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "C", "A", "T"],
    ["", "", "", "", "", ""],
  ];
  expect(crosswordValidQ({grid, trie})).toEqual({
    gameIsSolved: false,
    reason: "All of the letters must connect",
  });
});

test("false if unknown word", () => {
  const grid = [
    ["A", "N", "D", "", "", ""],
    ["N", "", "", "", "", ""],
    ["Y", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];
  expect(crosswordValidQ({grid, trie})).toEqual({
    gameIsSolved: false,
    reason: "Unknown word ANY",
  });
});

test("true if known words and all connected", () => {
  const grid = [
    ["A", "N", "D", "", "", ""],
    ["", "", "O", "", "", ""],
    ["", "", "G", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];
  expect(crosswordValidQ({grid, trie})).toEqual({
    gameIsSolved: true,
    reason: "",
  });
});

test("unknown words can be excepted", () => {
  const grid = [
    ["A", "N", "D", "", "", ""],
    ["N", "", "", "", "", ""],
    ["Y", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];
  expect(crosswordValidQ({grid, trie, exceptedWords: ["ANY"]})).toEqual({
    gameIsSolved: true,
    reason: "",
  });
});
