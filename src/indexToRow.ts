// Gets the row index of an index in a flat array assuming the array represents a grid of the specified number of columns
export function indexToRow(index: number, numColumns: number): number {
  return Math.floor(index / numColumns);
}
