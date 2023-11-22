export function getSurroundingIndexes({index, numColumns, numRows}) {
  const column = index % numColumns;
  const row = Math.floor(index / numColumns);
  let surroundingIndexes = [];
  for (let currentRow = row - 1; currentRow <= row + 1; currentRow++) {
    for (
      let currentColumn = column - 1;
      currentColumn <= column + 1;
      currentColumn++
    ) {
      if (
        currentRow >= 0 &&
        currentColumn >= 0 &&
        currentRow < numRows &&
        currentColumn < numColumns
      ) {
        const currentIndex = currentColumn + currentRow * numColumns;
        surroundingIndexes.push(currentIndex);
      }
    }
  }
  return surroundingIndexes;
}
