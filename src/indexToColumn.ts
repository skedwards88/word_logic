// Gets the column index of an index in a flat array assuming the array represents a grid of the specified number of columns
export function indexToColumn(index: number, numColumns: number): number {
  // error if index exceeds the grid size
  if (index >= numColumns * numColumns || index < 0) {
    throw new Error("Index is not within grid size");
  }

  return index % numColumns;
}
