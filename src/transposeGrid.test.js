import { transposeGrid } from "./transposeGrid";

describe("transposeGrid", () => {
  test("it swaps the rows and columns in a grid", () => {
    const grid = [
      ["A", "B", "", "", ""],
      ["C", "", "", "D", "E"],
      ["F", "G", "H", "I", ""],
      ["", "J", "", "K", "L"],
      ["M", "N", "", "", ""],
    ];
    const expectedGrid = [
      ["A", "C", "F", "", "M"],
      ["B", "", "G", "J", "N"],
      ["", "", "H", "", ""],
      ["", "D", "I", "K", ""],
      ["", "E", "", "L", ""],
    ];
    expect(transposeGrid(grid)).toEqual(expectedGrid);
  });

  test("it rejects grids that are wider than tall", () => {
    const grid = [["W", "I", "D", "E"]];
    expect(() => transposeGrid(grid)).toThrow(
      "The number of columns and number of rows in the grid must be equal."
    );
  });

  test("it rejects grids that are taller than wide, including empty grids", () => {
    const grid = [["T"], ["A"], ["L"], ["L"]];
    expect(() => transposeGrid(grid)).toThrow(
      "The number of columns and number of rows in the grid must be equal."
    );

    expect(() => transposeGrid([])).toThrow(
      "The number of columns and number of rows in the grid must be equal."
    );
  });

  test("it rejects grids that have uneven row lengths", () => {
    const grid = [
      ["A", "", "C"],
      ["", "B", "", "E"],
      ["D", "", ""],
    ];
    expect(() => transposeGrid(grid)).toThrow(
      "All of the rows in the grid must have the same length."
    );
  });
});
