import {getSurroundingIndexes} from "./getSurroundingIndexes.js";

export function checkIfNeighbors({
  indexA,
  indexB,
  numColumns,
  numRows,
}: {
  indexA: number | undefined;
  indexB: number | undefined;
  numColumns: number;
  numRows: number;
}): boolean {
  // Check if two indexes are neighbors in a grid
  // given the two indexes and the grid dimensions.
  // If only one index is provided, returns true.

  if (indexA === undefined || indexB === undefined) {
    return true;
  }

  const surroundingIndexes = getSurroundingIndexes({
    index: indexB,
    numColumns,
    numRows,
  });

  return surroundingIndexes.includes(indexA) ? true : false;
}
