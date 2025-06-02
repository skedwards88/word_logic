export function transposeGrid<T>(grid: T[][]): T[][] {
  if (!grid.length) {
    return grid;
  }

  const numColumnsPerRow = grid.map((row) => row.length);
  if (Math.min(...numColumnsPerRow) != Math.max(...numColumnsPerRow)) {
    throw new Error(`All of the rows in the grid must have the same length.`);
  }

  if (numColumnsPerRow.some((i) => i === 0)) {
    throw new Error(`Rows must not be empty.`);
  }

  const transposedGrid = grid[0].map((_, columnIndex) => {
    return grid.map((row) => {
      return row[columnIndex];
    });
  });

  return transposedGrid;
}
