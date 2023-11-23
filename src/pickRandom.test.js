import {
  pickRandomItemFromArray,
  pickRandomIndexFromArray,
  pickRandomItemsFromArray,
  pickRandomIntBetween,
} from "./pickRandom";
import seedrandom from "seedrandom";

describe("pickRandomItemFromArray", () => {
  test("returns an element that was in the input array", () => {
    const inputArray = ["act", "bat", "cat", "dog", "fish"];
    const randomElement = pickRandomItemFromArray(inputArray);
    expect(inputArray).toContain(randomElement);
  });

  test("returns a random element from the input array", () => {
    const inputArray = [
      "act",
      "bat",
      "cat",
      "dog",
      "fish",
      "monkey",
      "red",
      "orange",
      "yellow",
      "green",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ];
    const numberOfIterations = 10000;
    const expectedDistribution = 1 / inputArray.length;
    let counts = inputArray.reduce((dict, key) => ({...dict, [key]: 0}), {});

    for (let i = 0; i < numberOfIterations; i++) {
      const item = pickRandomItemFromArray(inputArray);
      counts[item] = counts[item] + 1;
    }

    for (const key in counts) {
      const actualDistribution = counts[key] / numberOfIterations;
      expect(actualDistribution).toBeCloseTo(expectedDistribution, 1);
    }
  });

  test("if a seeded pseudorandom generator is provided, the output is always the same", () => {
    const inputArray = [
      "act",
      "bat",
      "cat",
      "dog",
      "fish",
      "monkey",
      "red",
      "orange",
      "yellow",
      "green",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ];
    const seed = "test";
    const numberOfIterations = 100;

    let items = [];
    for (let i = 0; i < numberOfIterations; i++) {
      const pseudoRandomGenerator = seedrandom(seed);
      const item = pickRandomItemFromArray(inputArray, pseudoRandomGenerator);
      items.push(item);
    }

    const uniqueItems = new Set(items);
    expect(uniqueItems.size).toEqual(1);
  });

  test("returns undefined if the input array is empty", () => {
    const inputArray = [];
    const randomElement = pickRandomItemFromArray(inputArray);
    expect(randomElement).toBe(undefined);
  });
});

describe("pickRandomItemsFromArray", () => {
  test("returns n elements from the input array", () => {
    const inputArray = ["act", "bat", "cat", "dog", "fish"];
    const randomElements = pickRandomItemsFromArray(inputArray, 3);

    expect(inputArray).toEqual(expect.arrayContaining(randomElements));
    expect(randomElements.length).toBe(3);
  });

  test("does not return more elements if the number of requested items exceeds the length of the input array", () => {
    const inputArray = ["act", "bat", "cat", "dog", "fish"];
    const randomElements = pickRandomItemsFromArray(inputArray, 30);

    expect(inputArray).toEqual(expect.arrayContaining(randomElements));
    expect(randomElements).toEqual(expect.arrayContaining(inputArray));
    expect(randomElements.length).toBe(inputArray.length);
  });

  test("returns random values", () => {
    const inputArray = [
      "act",
      "bat",
      "cat",
      "dog",
      "fish",
      "monkey",
      "red",
      "orange",
      "yellow",
      "green",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ];
    const numberOfItems = 3;
    const numberOfIterations = 1000;
    const expectedDistribution = 1 / inputArray.length;
    const counts = inputArray.reduce((dict, key) => ({...dict, [key]: 0}), {});

    for (let i = 0; i < numberOfIterations; i++) {
      const items = pickRandomItemsFromArray(inputArray, numberOfItems);
      for (const item of items) {
        counts[item] = counts[item] + 1;
      }
    }

    for (const key in counts) {
      const actualDistribution =
        counts[key] / (numberOfIterations * numberOfItems);
      expect(actualDistribution).toBeCloseTo(expectedDistribution, 1);
    }
  });

  test("if a seeded pseudorandom generator is provided, the output is always the same", () => {
    const inputArray = [
      "act",
      "bat",
      "cat",
      "dog",
      "fish",
      "monkey",
      "red",
      "orange",
      "yellow",
      "green",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ];
    const seed = "test";
    const numberOfIterations = 100;
    const numberOfItems = 3;

    let items = [];
    for (let i = 0; i < numberOfIterations; i++) {
      const pseudoRandomGenerator = seedrandom(seed);
      const output = pickRandomItemsFromArray(
        inputArray,
        numberOfItems,
        pseudoRandomGenerator,
      );
      items.push(...output);
    }

    const uniqueItems = new Set(items);
    expect(uniqueItems.size).toEqual(numberOfItems);
  });

  test("returns an empty array if the input array is empty", () => {
    const inputArray = [];
    const randomElement = pickRandomItemsFromArray(inputArray, 3);
    expect(randomElement).toEqual([]);
  });
});

describe("pickRandomIndexFromArray", () => {
  test("returns an index from the input array", () => {
    const inputArray = ["act", "bat", "cat", "dog", "fish"];
    const randomIndex = pickRandomIndexFromArray(inputArray);
    expect(randomIndex).toBeGreaterThanOrEqual(0);
    expect(randomIndex).toBeLessThan(inputArray.length);
  });

  test("returns a random index from the input array", () => {
    const inputArray = [
      "act",
      "bat",
      "cat",
      "dog",
      "fish",
      "monkey",
      "red",
      "orange",
      "yellow",
      "green",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ];
    const numberOfIterations = 10000;
    const expectedDistribution = 1 / inputArray.length;
    let counts = inputArray.reduce(
      (dict, key, index) => ({...dict, [index]: 0}),
      {},
    );

    for (let i = 0; i < numberOfIterations; i++) {
      const randomIndex = pickRandomIndexFromArray(inputArray);
      counts[randomIndex] = counts[randomIndex] + 1;
    }
    for (const key in counts) {
      const actualDistribution = counts[key] / numberOfIterations;
      expect(actualDistribution).toBeCloseTo(expectedDistribution, 1);
    }
  });

  test("if a seeded pseudorandom generator is provided, the output is always the same", () => {
    const inputArray = [
      "act",
      "bat",
      "cat",
      "dog",
      "fish",
      "monkey",
      "red",
      "orange",
      "yellow",
      "green",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ];
    const seed = "test";
    const numberOfIterations = 100;

    let items = [];
    for (let i = 0; i < numberOfIterations; i++) {
      const pseudoRandomGenerator = seedrandom(seed);
      const index = pickRandomIndexFromArray(inputArray, pseudoRandomGenerator);
      items.push(index);
    }

    const uniqueItems = new Set(items);
    expect(uniqueItems.size).toEqual(1);
  });

  test("if the input array is empty, returns 0", () => {
    const inputArray = [];
    const randomIndex = pickRandomIndexFromArray(inputArray);
    expect(randomIndex).toEqual(0);
    // expect(randomIndex).toBeLessThan(inputArray.length);
  });
});

describe("pickRandomIntBetween", () => {
  // todo negatives handle

  test("returns a random integer between min and max, inclusive", () => {
    const min = 5;
    const max = 9;
    const numberOfIterations = 1000;
    const expectedDistribution = 1 / (1 + max - min);

    let counts = {};
    for (let index = min; index <= max; index++) {
      counts[index] = 0;
    }
    for (let i = 0; i < numberOfIterations; i++) {
      const randomInt = pickRandomIntBetween(min, max);
      expect(randomInt).toBeGreaterThanOrEqual(min);
      expect(randomInt).toBeLessThanOrEqual(max);
      counts[randomInt] = counts[randomInt] + 1;
    }

    for (const key in counts) {
      const actualDistribution = counts[key] / numberOfIterations;
      // toBeCloseTo expected precision of 1 (second arg) means that expected difference <0.05
      expect(actualDistribution).toBeCloseTo(expectedDistribution, 1);
    }
  });

  test("returns a random integer between min and max, inclusive (case where min = max)", () => {
    const min = 9;
    const max = 9;
    const numberOfIterations = 1000;
    const expectedDistribution = 1 / (1 + max - min);

    let counts = {};
    for (let index = min; index <= max; index++) {
      counts[index] = 0;
    }
    for (let i = 0; i < numberOfIterations; i++) {
      const randomInt = pickRandomIntBetween(min, max);
      expect(randomInt).toBeGreaterThanOrEqual(min);
      expect(randomInt).toBeLessThanOrEqual(max);
      counts[randomInt] = counts[randomInt] + 1;
    }

    for (const key in counts) {
      const actualDistribution = counts[key] / numberOfIterations;
      // toBeCloseTo expected precision of 1 (second arg) means that expected difference <0.05
      expect(actualDistribution).toBeCloseTo(expectedDistribution, 1);
    }
  });

  test("if a seeded pseudorandom generator is provided, the output is always the same", () => {
    const min = 9;
    const max = 9;
    const seed = "test";
    const numberOfIterations = 100;

    let items = [];
    for (let i = 0; i < numberOfIterations; i++) {
      const pseudoRandomGenerator = seedrandom(seed);
      const item = pickRandomIntBetween(min, max, pseudoRandomGenerator);
      items.push(item);
    }

    const uniqueItems = new Set(items);
    expect(uniqueItems.size).toEqual(1);
  });

  test("Does not care if the order of the args is min,max or max,min", () => {
    const min = 5;
    const max = 9;
    const numberOfIterations = 1000;
    const expectedDistribution = 1 / (1 + max - min);

    let counts = {};
    for (let index = min; index <= max; index++) {
      counts[index] = 0;
    }
    for (let i = 0; i < numberOfIterations; i++) {
      const randomInt = pickRandomIntBetween(min, max);
      expect(randomInt).toBeGreaterThanOrEqual(min);
      expect(randomInt).toBeLessThanOrEqual(max);
      counts[randomInt] = counts[randomInt] + 1;
    }

    for (const key in counts) {
      const actualDistribution = counts[key] / numberOfIterations;
      // toBeCloseTo expected precision of 1 (second arg) means that expected difference <0.05
      expect(actualDistribution).toBeCloseTo(expectedDistribution, 1);
    }

    counts = {};
    for (let index = min; index <= max; index++) {
      counts[index] = 0;
    }
    for (let i = 0; i < numberOfIterations; i++) {
      const randomInt = pickRandomIntBetween(max, min);
      expect(randomInt).toBeGreaterThanOrEqual(min);
      expect(randomInt).toBeLessThanOrEqual(max);
      counts[randomInt] = counts[randomInt] + 1;
    }

    for (const key in counts) {
      const actualDistribution = counts[key] / numberOfIterations;
      // toBeCloseTo expected precision of 1 (second arg) means that expected difference <0.05
      expect(actualDistribution).toBeCloseTo(expectedDistribution, 1);
    }
  });

  test("works with mix of negative and positive values", () => {
    const min = -5;
    const max = 9;
    const numberOfIterations = 1000;
    const expectedDistribution = 1 / (1 + max - min);

    let counts = {};
    for (let index = min; index <= max; index++) {
      counts[index] = 0;
    }
    for (let i = 0; i < numberOfIterations; i++) {
      const randomInt = pickRandomIntBetween(min, max);
      expect(randomInt).toBeGreaterThanOrEqual(min);
      expect(randomInt).toBeLessThanOrEqual(max);
      counts[randomInt] = counts[randomInt] + 1;
    }

    for (const key in counts) {
      const actualDistribution = counts[key] / numberOfIterations;
      // toBeCloseTo expected precision of 1 (second arg) means that expected difference <0.05
      expect(actualDistribution).toBeCloseTo(expectedDistribution, 1);
    }
  });

  test("works with negative values", () => {
    const min = -9;
    const max = -5;
    const numberOfIterations = 1000;
    const expectedDistribution = 1 / (1 + max - min);

    let counts = {};
    for (let index = min; index <= max; index++) {
      counts[index] = 0;
    }
    for (let i = 0; i < numberOfIterations; i++) {
      const randomInt = pickRandomIntBetween(min, max);
      expect(randomInt).toBeGreaterThanOrEqual(min);
      expect(randomInt).toBeLessThanOrEqual(max);
      counts[randomInt] = counts[randomInt] + 1;
    }

    for (const key in counts) {
      const actualDistribution = counts[key] / numberOfIterations;
      // toBeCloseTo expected precision of 1 (second arg) means that expected difference <0.05
      expect(actualDistribution).toBeCloseTo(expectedDistribution, 1);
    }
  });
});
