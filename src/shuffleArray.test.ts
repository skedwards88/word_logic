import {shuffleArray} from "./shuffleArray";
import seedrandom from "seedrandom";

describe("shuffleArray", () => {
  test("the shuffled array contains the same items", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(original);

    expect(original.sort()).toEqual(shuffled.sort());
  });

  test("the shuffled array is not the same order", () => {
    // This could be a flaky test.
    // Making a larger array or having multiple calls
    // would make that less likely.
    let original = [];
    for (let index = 0; index < 1000; index++) {
      original = [...original, index];
    }
    const shuffled = shuffleArray(original);

    expect(original).not.toEqual(shuffled);
  });

  test("a pseduorandom seed will always shuffle the same", () => {
    const original = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const shuffled = shuffleArray(original, seedrandom("test"));
    const shuffledAgain = shuffleArray(original, seedrandom("test"));

    expect(original).not.toEqual(shuffled);
    expect(shuffledAgain).toEqual(shuffled);
  });

  test("returns an array with the same length as the input", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray([...inputArray]);
    expect(shuffledArray.length).toBe(inputArray.length);
  });

  test("returns an array with the same elements as the input", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray([...inputArray]);
    expect(shuffledArray.sort()).toEqual(inputArray.sort());
  });

  test("the input array is unchanged", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const inputArrayCopy = [...inputArray];
    const shuffledArray = shuffleArray(inputArray);
    expect(shuffledArray).not.toEqual(inputArray);
    expect(inputArrayCopy).toEqual(inputArray);
  });
});
