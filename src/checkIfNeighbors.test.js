import { checkIfNeighbors } from "./checkIfNeighbors";

test("Zero is considered a value", () => {
  expect(checkIfNeighbors({ indexA: 0, indexB: 5, numColumns: 4, numRows: 7 })).toEqual(true);
});

test("Not neighbors", () => {
  expect(checkIfNeighbors({ indexA: 0, indexB: 4, numColumns: 5, numRows: 5 })).toEqual(
    false
  );
});

test("True if either index undefined", () => {
  expect(
    checkIfNeighbors({ indexA: undefined, indexB: 5, numColumns: 4, numRows: 7 })
  ).toEqual(true);
  expect(
    checkIfNeighbors({ indexA: undefined, indexB: undefined, numColumns: 4, numRows: 7 })
  ).toEqual(true);
  expect(
    checkIfNeighbors({ indexA: 6, indexB: undefined, numColumns: 4, numRows: 7 })
  ).toEqual(true);
});
