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

  const {maxShiftLeft, maxShiftRight, maxShiftUp, maxShiftDown} = getMaxShifts(
    grid,
    "",
  );

  expect(maxShiftLeft).toEqual(1);
  expect(maxShiftRight).toEqual(2);
  expect(maxShiftUp).toEqual(1);
  expect(maxShiftDown).toEqual(0);
});

test("Gets the number of empty rows/columns on each side of a 2D grid where the empty values are 0", () => {
  const grid = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 0],
  ];

  const {maxShiftLeft, maxShiftRight, maxShiftUp, maxShiftDown} = getMaxShifts(
    grid,
    0,
  );

  expect(maxShiftLeft).toEqual(1);
  expect(maxShiftRight).toEqual(2);
  expect(maxShiftUp).toEqual(1);
  expect(maxShiftDown).toEqual(0);
});

test("Gets the number of empty rows/columns on each side of a 2D grid where the empty values are undefined", () => {
  const grid = [
    [undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, "ANT", undefined, "CROW", undefined, undefined],
    [undefined, "ART", "BALLOON", "CAR", undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, "AWL", "ZIP", "CAT", undefined, undefined],
    [undefined, "ARF", undefined, "COw", undefined, undefined],
  ];

  const {maxShiftLeft, maxShiftRight, maxShiftUp, maxShiftDown} = getMaxShifts(
    grid,
    undefined,
  );

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

  const {maxShiftLeft, maxShiftRight, maxShiftUp, maxShiftDown} = getMaxShifts(
    grid,
    "",
  );

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

  expect(() => getMaxShifts(grid, "")).toThrow(
    "The number of columns and number of rows in the grid must be equal.",
  );
});
