import { getLetterPool } from "./letterPool";

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
const words = [...commonWords, ...uncommonWords];

test("All letters represented in pool, except for Q (is Qu)", () => {
  const pool = getLetterPool(words);
  const letters = commonWords.concat(uncommonWords).join("").split("");

  const missingLetters = letters.filter((letter) => !pool.includes(letter));

  expect(missingLetters).toEqual(["Q"]);
  expect(pool.includes("Qu")).toEqual(true);
});

test("Pool adds up to ~100", () => {
  const pool = getLetterPool(words);
  expect(pool.length).toBeGreaterThan(90);
  expect(pool.length).toBeLessThan(110);
});
