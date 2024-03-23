import {getMaxShifts} from "./getMaxShifts";

test("Gets the number of empty rows/columns on each side of a 2D grid", () => {
  const grid = [
    ["", "", "", "", "", ""],
    ["", "A", "", "C", "", ""],
    ["", "A", "B", "C", "", ""],
    ["", "", "", "", "", ""],
    ["", "A", "Z", "C", "", ""],
    ["", "A", "", "C", "", ""],
  ];

  const {maxShiftLeft, maxShiftRight, maxShiftUp, maxShiftDown} =
    getMaxShifts(grid);

  expect(maxShiftLeft).toEqual(1);
  expect(maxShiftRight).toEqual(2);
  expect(maxShiftUp).toEqual(1);
  expect(maxShiftDown).toEqual(0);
});

test("Returns 0 in all directions if grid can't be shifted", () => {
  const grid = [
    ["A", "", "C", "", ""],
    ["A", "B", "C", "", "P"],
    ["", "", "", "", ""],
    ["A", "Z", "C", "", ""],
    ["A", "", "C", "", ""],
  ];

  const {maxShiftLeft, maxShiftRight, maxShiftUp, maxShiftDown} =
    getMaxShifts(grid);

  expect(maxShiftLeft).toEqual(0);
  expect(maxShiftRight).toEqual(0);
  expect(maxShiftUp).toEqual(0);
  expect(maxShiftDown).toEqual(0);
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

  expect(() => getMaxShifts(grid)).toThrow(
    "The number of columns and number of rows in the grid must be equal.",
  );
});
