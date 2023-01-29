import { isKnown } from "./isKnown";
import { getTrie } from "./trie";

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

test("Unknown word", () => {
  const result = isKnown("CAT", trie);
  const expected = { isEasy: false, isPartial: false, isWord: false };

  expect(result).toEqual(expected);
});

test("Partial word", () => {
  const result = isKnown("CAM", trie);
  const expected = { isEasy: false, isPartial: true, isWord: false };

  expect(result).toEqual(expected);
});

test("Known uncommon word", () => {
  const result = isKnown("CAMPER", trie);
  const expected = { isEasy: false, isPartial: true, isWord: true };

  expect(result).toEqual(expected);
});

test("Known common word", () => {
  const result = isKnown("CAMP", trie);
  const expected = { isEasy: true, isPartial: true, isWord: true };

  expect(result).toEqual(expected);
});
