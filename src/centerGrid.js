import cloneDeep from "lodash.clonedeep";
import {getMaxShifts} from "./getMaxShifts.js";
import {transposeGrid} from "./transposeGrid.js";

export function centerGrid(grid, emptyValue) {
  let shiftedGrid = cloneDeep(grid);

  const emptyRow = Array(grid.length).fill(emptyValue);

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
    ...Array(newMaxShiftUp).fill(emptyRow),
    ...cutTopBottom,
    ...Array(newMaxShiftDown).fill(emptyRow),
  ];

  // transpose
  shiftedGrid = transposeGrid(shiftedGrid);

  // trim the empty rows, then pad with empty rows to center
  const cutLeftRight = shiftedGrid.slice(
    maxShiftLeft,
    shiftedGrid.length - maxShiftRight,
  );
  shiftedGrid = [
    ...Array(newMaxShiftLeft).fill(emptyRow),
    ...cutLeftRight,
    ...Array(newMaxShiftRight).fill(emptyRow),
  ];

  // un transpose
  shiftedGrid = transposeGrid(shiftedGrid);

  return shiftedGrid;
}
