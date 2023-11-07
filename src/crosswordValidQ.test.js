import { crosswordValidQ } from "./crosswordValidQ";
import { getTrie } from "./getTrie";

describe("crosswordValidQ", () => {
  const commonWords = ["WALK", "CAMP", "QUIET", "LET"];
  const uncommonWords = ["NATURE", "SOLITUDE", "HAPPINESS", "CAMPER"];
  const trie = getTrie(commonWords, uncommonWords);

  test("returns true if all letters are connected and all horizontal and vertical words are in the trie", () => {
    const grid = [
      ["", "W", "", "", ""],
      ["C", "A", "M", "P", ""],
      ["", "L", "", "", ""],
      ["", "K", "", "", ""],
      ["", "", "", "", ""],
    ];
    const actual = crosswordValidQ({ grid, trie });
    expect(actual.gameIsSolved).toBe(true);
    expect(actual.reason).toEqual("");
  });

  test("if the letters are not all connected, returns false", () => {
    const grid = [
      ["A", "B", "", "", ""],
      ["E", "", "", "F", "I"],
      ["G", "H", "I", "", ""],
      ["J", "K", "", "", ""],
      ["W", "X", "", "", ""],
    ];
    const actual = crosswordValidQ({ grid, trie: {} });
    expect(actual.gameIsSolved).toBe(false);
    expect(actual.reason).toEqual("All of the letters must connect");
  });

  test("if any horizontal word is not in the trie, returns false", () => {
    const grid = [
      ["", "W", "", "", ""],
      ["C", "A", "L", "M", ""],
      ["", "L", "", "", ""],
      ["", "K", "", "", ""],
      ["", "", "", "", ""],
    ];
    const actual = crosswordValidQ({ grid, trie });
    expect(actual.gameIsSolved).toBe(false);
    expect(actual.reason).toEqual("Unknown word CALM");
  });

  test("if any vertical word is not in the trie, returns false", () => {
    const grid = [
      ["", "C", "", "", ""],
      ["W", "A", "L", "K", ""],
      ["", "L", "", "", ""],
      ["", "M", "", "", ""],
      ["", "", "", "", ""],
    ];
    const actual = crosswordValidQ({ grid, trie });
    expect(actual.gameIsSolved).toBe(false);
    expect(actual.reason).toEqual("Unknown word CALM");
  });

  test("if any word is not in the trie but the word is in the excepted list, returns true", () => {
    const grid = [
      ["", "W", "", "", ""],
      ["C", "A", "L", "M", ""],
      ["", "L", "", "", ""],
      ["", "K", "", "", ""],
      ["", "", "", "", ""],
    ];
    const actual = crosswordValidQ({ grid, trie, exceptedWords: ["CALM"] });
    expect(actual.gameIsSolved).toBe(true);
    expect(actual.reason).toEqual("");
  });

  test("it works when there are multiple words in a single row", () => {
    const grid = [
      ["", "", "", "", "", "", ""],
      ["C", "A", "T", "", "E", "A", "T"],
      ["", "", "R", "", "", "I", ""],
      ["", "", "Y", "E", "A", "R", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ];
    const actual = crosswordValidQ({
      grid,
      trie,
      exceptedWords: ["CAT", "TRY", "YEAR", "AIR"],
    });
    expect(actual.gameIsSolved).toBe(false);
    expect(actual.reason).toEqual("Unknown word EAT");
  });

  test("it works when there are multiple words in a single column", () => {
    const grid = [
      ["", "C", "", "", "", "", ""],
      ["", "A", "", "", "", "", ""],
      ["", "T", "R", "Y", "", "", ""],
      ["", "", "", "E", "", "", ""],
      ["", "E", "", "A", "", "", ""],
      ["", "A", "I", "R", "", "", ""],
      ["", "T", "", "", "", "", ""],
    ];
    const actual = crosswordValidQ({
      grid,
      trie,
      exceptedWords: ["CAT", "TRY", "YEAR", "AIR"],
    });
    expect(actual.gameIsSolved).toBe(false);
    expect(actual.reason).toEqual("Unknown word EAT");
  });

  test("if the grid does not contain any letters, returns true", () => {
    const grid = [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ];
    const actual = crosswordValidQ({ grid, trie, exceptedWords: ["CALM"] });
    expect(actual.gameIsSolved).toBe(true);
    expect(actual.reason).toEqual("");
  });

  test("it rejects grids that are wider than tall", () => {
    const grid = [["W", "I", "D", "E"]];
    expect(() => crosswordValidQ({ grid, trie })).toThrow(
      "The number of columns and number of rows in the grid must be equal."
    );
  });

  test("it rejects grids that are taller than wide, including empty grids", () => {
    const grid = [["T"], ["A"], ["L"], ["L"]];
    expect(() => crosswordValidQ({ grid, trie })).toThrow(
      "The number of columns and number of rows in the grid must be equal."
    );

    expect(() => crosswordValidQ({ grid: [], trie })).toThrow(
      "The number of columns and number of rows in the grid must be equal."
    );
  });

  test("it rejects grids have uneven row lengths", () => {
    const grid = [
      ["A", "E", "C"],
      ["R", "B", "T", "E"],
      ["D", "", ""],
    ];
    expect(() => crosswordValidQ({ grid, trie })).toThrow(
      "All of the rows in the grid must have the same length."
    );
  });

  test("it will work with an empty trie", () => {
    const grid = [
      ["", "W", "", "", ""],
      ["C", "A", "L", "M", ""],
      ["", "L", "", "", ""],
      ["", "K", "", "", ""],
      ["", "", "", "", ""],
    ];
    expect(
      crosswordValidQ({ grid, trie: {}, exceptedWords: ["CALM"] }).gameIsSolved
    ).toBe(false);
    expect(
      crosswordValidQ({ grid, trie: {}, exceptedWords: ["CALM"] }).reason
    ).toEqual("Unknown word WALK");

    expect(
      crosswordValidQ({ grid, trie: {}, exceptedWords: ["CALM", "WALK"] })
        .gameIsSolved
    ).toBe(true);
    expect(
      crosswordValidQ({ grid, trie: {}, exceptedWords: ["CALM", "WALK"] })
        .reason
    ).toEqual("");
  });
});
