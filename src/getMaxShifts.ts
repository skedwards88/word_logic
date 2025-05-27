import {transposeGrid} from "./transposeGrid.js";

// get the number of empty rows/columns on each side of a 2D grid
export function getMaxShifts<T>(
  grid: T[][],
  emptyValue: T,
): {
  maxShiftDown: number;
  maxShiftLeft: number;
  maxShiftRight: number;
  maxShiftUp: number;
} {
  const transposedGrid = transposeGrid(grid);

  let maxShiftUp = 0;
  for (let index = 0; index < grid.length; index++) {
    if (grid[index].every((i) => i == emptyValue)) {
      maxShiftUp++;
    } else {
      break;
    }
  }

  let maxShiftDown = 0;
  for (let index = grid.length - 1; index >= 0; index--) {
    if (grid[index].every((i) => i == emptyValue)) {
      maxShiftDown++;
    } else {
      break;
    }
  }

  let maxShiftLeft = 0;
  for (let index = 0; index < transposedGrid.length; index++) {
    if (transposedGrid[index].every((i) => i == emptyValue)) {
      maxShiftLeft++;
    } else {
      break;
    }
  }

  let maxShiftRight = 0;
  for (let index = transposedGrid.length - 1; index >= 0; index--) {
    if (transposedGrid[index].every((i) => i == emptyValue)) {
      maxShiftRight++;
    } else {
      break;
    }
  }

  return {
    maxShiftDown: maxShiftDown,
    maxShiftLeft: maxShiftLeft,
    maxShiftRight: maxShiftRight,
    maxShiftUp: maxShiftUp,
  };
}
