import {getMaxShifts} from "./getMaxShifts.js";
import {transposeGrid} from "./transposeGrid.js";

export function centerGrid<T>(grid: T[][], emptyValue: T): T[][] {
  let shiftedGrid = structuredClone(grid);

  const emptyRow = Array<T>(grid.length).fill(emptyValue);

  // determine the number of current empty edge rows
  // and the number of empty edge rows when centered
  const {maxShiftLeft, maxShiftRight, maxShiftUp, maxShiftDown} = getMaxShifts(
    grid,
    emptyValue,
  );
  const averageShiftLeftRight = (maxShiftLeft + maxShiftRight) / 2;
  const newMaxShiftLeft = Math.floor(averageShiftLeftRight);
  const newMaxShiftRight = Math.ceil(averageShiftLeftRight);
  const averageShiftUpDown = (maxShiftUp + maxShiftDown) / 2;
  const newMaxShiftUp = Math.floor(averageShiftUpDown);
  const newMaxShiftDown = Math.ceil(averageShiftUpDown);

  // trim the empty rows, then pad with empty rows to center
  const cutTopBottom = shiftedGrid.slice(
    maxShiftUp,
    shiftedGrid.length - maxShiftDown,
  );
  shiftedGrid = [
    ...Array<T[]>(newMaxShiftUp).fill(emptyRow),
    ...cutTopBottom,
    ...Array<T[]>(newMaxShiftDown).fill(emptyRow),
  ];

  // transpose
  shiftedGrid = transposeGrid(shiftedGrid);

  // trim the empty rows, then pad with empty rows to center
  const cutLeftRight = shiftedGrid.slice(
    maxShiftLeft,
    shiftedGrid.length - maxShiftRight,
  );
  shiftedGrid = [
    ...Array<T[]>(newMaxShiftLeft).fill(emptyRow),
    ...cutLeftRight,
    ...Array<T[]>(newMaxShiftRight).fill(emptyRow),
  ];

  // un transpose
  shiftedGrid = transposeGrid(shiftedGrid);

  return shiftedGrid;
}
