import type seedrandom from "seedrandom";

function getRandom(pseudoRandomGenerator?: seedrandom.PRNG): number {
  if (pseudoRandomGenerator) {
    return pseudoRandomGenerator();
  } else {
    return Math.random();
  }
}

// return a random element from a given array
export function pickRandomItemFromArray<T>(
  inputArray: T[],
  pseudoRandomGenerator?: seedrandom.PRNG,
): T {
  return inputArray[
    Math.floor(getRandom(pseudoRandomGenerator) * inputArray.length)
  ];
}

// return n random elements from a given array
export function pickRandomItemsFromArray<T>(
  inputArray: T[],
  numberOfItems: number,
  pseudoRandomGenerator?: seedrandom.PRNG,
): T[] {
  let modifiedArray = [...inputArray];
  let items: T[] = [];
  for (
    let index = 0;
    index < Math.min(numberOfItems, inputArray.length);
    index++
  ) {
    const itemIndex = pickRandomIndexFromArray(
      modifiedArray,
      pseudoRandomGenerator,
    );
    items = [...items, modifiedArray[itemIndex]];
    modifiedArray = [
      ...modifiedArray.slice(0, itemIndex),
      ...modifiedArray.slice(itemIndex + 1, modifiedArray.length),
    ];
  }
  return items;
}

// return a random index from a given array
export function pickRandomIndexFromArray<T>(
  inputArray: T[],
  pseudoRandomGenerator?: seedrandom.PRNG,
): number {
  return Math.floor(getRandom(pseudoRandomGenerator) * inputArray.length);
}

// return a random int within a range, inclusive
export function pickRandomIntBetween(
  int1: number,
  int2: number,
  pseudoRandomGenerator?: seedrandom.PRNG,
): number {
  const min = Math.min(int1, int2);
  const max = Math.max(int1, int2);

  // To make it inclusive, need max + 1
  return Math.floor(min + getRandom(pseudoRandomGenerator) * (max + 1 - min));
}
