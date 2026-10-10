// Gets the column index of an index in a flat array assuming the array represents a grid of the specified number of columns
export function indexToColumn(index: number, numColumns: number): number {
  return index % numColumns;
}
