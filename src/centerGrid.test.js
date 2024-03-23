import {centerGrid} from "./centerGrid";

test("Centers a 2D grid of letters", () => {
  const grid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "D", "", "", ""],
    ["E", "", "C", "", ""],
    ["F", "B", "", "", ""],
  ];

  const centeredGrid = centerGrid(grid);

  const expectedGrid = [
    ["", "", "", "", ""],
    ["", "", "D", "", ""],
    ["", "E", "", "C", ""],
    ["", "F", "B", "", ""],
    ["", "", "", "", ""],
  ];

  expect(centeredGrid).toEqual(expectedGrid);
});

test("If the grid can't be perfectly centered, errs towards the top left", () => {
  const expectedGrid = [
    ["", "", "", "", "", ""],
    ["", "", "B", "", "", ""],
    ["", "C", "A", "E", "", ""],
    ["", "", "D", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];

  const gridBottomLeft = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "B", "", "", "", ""],
    ["C", "A", "E", "", "", ""],
    ["", "D", "", "", "", ""],
  ];

  expect(centerGrid(gridBottomLeft)).toEqual(expectedGrid);

  const gridBottomRight = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "B", ""],
    ["", "", "", "C", "A", "E"],
    ["", "", "", "", "D", ""],
  ];

  expect(centerGrid(gridBottomRight)).toEqual(expectedGrid);

  const gridTopLeft = [
    ["", "B", "", "", "", ""],
    ["C", "A", "E", "", "", ""],
    ["", "D", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];

  expect(centerGrid(gridTopLeft)).toEqual(expectedGrid);

  const gridTopRight = [
    ["", "", "", "", "B", ""],
    ["", "", "", "C", "A", "E"],
    ["", "", "", "", "D", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];

  expect(centerGrid(gridTopRight)).toEqual(expectedGrid);
});

test("If the grid is already centered up/down, will still center right/left", () => {
  const grid = [
    ["", "", "", "", ""],
    ["", "D", "", "", ""],
    ["E", "", "C", "", ""],
    ["F", "B", "", "", ""],
    ["", "", "", "", ""],
  ];

  const centeredGrid = centerGrid(grid);

  const expectedGrid = [
    ["", "", "", "", ""],
    ["", "", "D", "", ""],
    ["", "E", "", "C", ""],
    ["", "F", "B", "", ""],
    ["", "", "", "", ""],
  ];

  expect(centeredGrid).toEqual(expectedGrid);
});

test("If the grid is already centered right/left, will still center up/down", () => {
  const grid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "D", "", ""],
    ["", "E", "", "C", ""],
    ["", "F", "B", "", ""],
  ];

  const centeredGrid = centerGrid(grid);

  const expectedGrid = [
    ["", "", "", "", ""],
    ["", "", "D", "", ""],
    ["", "E", "", "C", ""],
    ["", "F", "B", "", ""],
    ["", "", "", "", ""],
  ];

  expect(centeredGrid).toEqual(expectedGrid);
});

test("Errors if the grid is not a square", () => {
  const grid = [
    ["A", "", "C", "", ""],
    ["A", "B", "C", "", "P"],
    ["", "", "", "", ""],
    ["A", "Z", "C", "", ""],
    ["A", "", "C", "", ""],
    ["A", "", "C", "", ""],
  ];

  expect(() => centerGrid(grid)).toThrow(
    "The number of columns and number of rows in the grid must be equal.",
  );
});
