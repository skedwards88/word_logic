export function transposeGrid(grid) {
  // The simple method of grid transposition used in this function
  // relies on an equal number of rows and columns,
  // so throw errors if that isn't the case
  if (grid.length != grid[0]?.length) {
    throw new Error(
      `The number of columns and number of rows in the grid must be equal.`,
    );
  }

  const numColumnsPerRow = grid.map((row) => row.length);
  if (Math.min(...numColumnsPerRow) != Math.max(...numColumnsPerRow)) {
    throw new Error(`All of the rows in the grid must have the same length.`);
  }

  const transposedGrid = grid.map((_, index) => grid.map((row) => row[index]));

  return transposedGrid;
}
