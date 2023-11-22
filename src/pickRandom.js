// return a random element from a given array
export function pickRandomItemFromArray(inputArray) {
  return inputArray[Math.floor(Math.random() * inputArray.length)];
}

// return n random elements from a given array
export function pickRandomItemsFromArray(inputArray, numberOfItems) {
  let modifiedArray = [...inputArray];
  let items = [];
  for (
    let index = 0;
    index < Math.min(numberOfItems, inputArray.length);
    index++
  ) {
    const itemIndex = pickRandomIndexFromArray(modifiedArray);
    items = [...items, modifiedArray[itemIndex]];
    modifiedArray = [
      ...modifiedArray.slice(0, itemIndex),
      ...modifiedArray.slice(itemIndex + 1, modifiedArray.length),
    ];
  }
  return items;
}

// return a random index from a given array
export function pickRandomIndexFromArray(inputArray) {
  return Math.floor(Math.random() * inputArray.length);
}

// return a random int within a range, inclusive
export function pickRandomIntBetween(int1, int2) {
  const min = Math.min(int1, int2);
  const max = Math.max(int1, int2);

  // To make it inclusive, need max + 1
  return Math.floor(min + Math.random() * (max + 1 - min));
}
