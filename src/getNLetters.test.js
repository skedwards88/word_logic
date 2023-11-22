import {getNLetters} from "./getNLetters";

test("If fewer letters than the letter pool are requested, returns a subset of the letter pool", () => {
  const desiredNumLetters = 3;
  const letterPool = ["A", "A", "B", "C", "D", "D", "D"];

  const selectedLetters = getNLetters(desiredNumLetters, letterPool);
  let unselectedLetters = [...letterPool];
  for (const letter of selectedLetters) {
    const index = unselectedLetters.indexOf(letter);
    if (index >= 0) {
      unselectedLetters.splice(index, 1);
    }
  }

  expect(selectedLetters.length).toEqual(desiredNumLetters);
  expect([...selectedLetters, ...unselectedLetters].sort()).toEqual(
    letterPool.sort(),
  );
});

test("If more letters than the letter pool are requested, returns a subset of the letter pool in addition to multiples of the letter pool", () => {
  const desiredNumLetters = 17;
  const letterPool = ["A", "A", "B", "C", "D", "D", "D"];

  const selectedLetters = getNLetters(desiredNumLetters, letterPool);
  let unselectedLetters = [...letterPool, ...letterPool, ...letterPool];
  for (const letter of selectedLetters) {
    const index = unselectedLetters.indexOf(letter);
    if (index >= 0) {
      unselectedLetters.splice(index, 1);
    }
  }

  expect(selectedLetters.length).toEqual(desiredNumLetters);
  expect([...selectedLetters, ...unselectedLetters].sort()).toEqual(
    [...letterPool, ...letterPool, ...letterPool].sort(),
  );
});

test("If the exact size of the letter pool is requested, returns the letter pool", () => {
  const letterPool = ["A", "A", "B", "C", "D", "D", "D"];
  const desiredNumLetters = letterPool.length;

  const selectedLetters = getNLetters(desiredNumLetters, letterPool);

  expect(selectedLetters.length).toEqual(desiredNumLetters);
  expect(selectedLetters.sort()).toEqual(letterPool.sort());
});

test("the subset returned is random (case where number of letters is < pool)", () => {
  const desiredNumLetters = 3;
  const letterPool = [
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "B",
    "B",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "C",
    "C",
    "C",
    "C",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "D",
    "D",
    "D",
    "D",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "F",
    "F",
    "G",
    "G",
    "G",
    "H",
    "H",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "M",
    "M",
    "M",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "P",
    "P",
    "P",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "Y",
    "Y",
    "K",
    "K",
    "W",
    "X",
    "U",
    "U",
    "U",
    "V",
    "J",
    "Z",
    "Qu",
  ];

  const numberOfIterations = 10000;
  const letterPoolCounts = letterPool.reduce(
    (dict, key) =>
      dict[key]
        ? {...dict, [key]: dict[key] + 1, total: dict.total + 1}
        : {...dict, [key]: 1, total: dict.total + 1},
    {total: 0},
  );

  let iterationCounts = letterPool.reduce(
    (dict, key) => ({...dict, [key]: 0}),
    {total: 0},
  );
  for (let i = 0; i < numberOfIterations; i++) {
    const selectedLetters = getNLetters(desiredNumLetters, letterPool);
    for (const letter of selectedLetters) {
      iterationCounts[letter] = iterationCounts[letter] + 1;
      iterationCounts.total = iterationCounts.total + 1;
    }
  }

  let diffs = [];
  for (const key in letterPoolCounts) {
    const actualDistribution = iterationCounts[key] / iterationCounts.total;
    const expectedDistribution = letterPoolCounts[key] / letterPoolCounts.total;
    diffs.push(Math.abs(actualDistribution - expectedDistribution));
    // toBeCloseTo expected precision of 2 (second arg) means that expected difference <0.005
    expect(actualDistribution).toBeCloseTo(expectedDistribution, 2);
  }
});

test("the subset returned is random (case where number of letters is > pool)", () => {
  const letterPool = [
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "B",
    "B",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "C",
    "C",
    "C",
    "C",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "D",
    "D",
    "D",
    "D",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "F",
    "F",
    "G",
    "G",
    "G",
    "H",
    "H",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "M",
    "M",
    "M",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "P",
    "P",
    "P",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "Y",
    "Y",
    "K",
    "K",
    "W",
    "X",
    "U",
    "U",
    "U",
    "V",
    "J",
    "Z",
    "Qu",
  ];
  const desiredNumLetters = letterPool.length * 4.3;

  const numberOfIterations = 10000;
  const letterPoolCounts = letterPool.reduce(
    (dict, key) =>
      dict[key]
        ? {...dict, [key]: dict[key] + 1, total: dict.total + 1}
        : {...dict, [key]: 1, total: dict.total + 1},
    {total: 0},
  );

  let iterationCounts = letterPool.reduce(
    (dict, key) => ({...dict, [key]: 0}),
    {total: 0},
  );
  for (let i = 0; i < numberOfIterations; i++) {
    const selectedLetters = getNLetters(desiredNumLetters, letterPool);
    for (const letter of selectedLetters) {
      iterationCounts[letter] = iterationCounts[letter] + 1;
      iterationCounts.total = iterationCounts.total + 1;
    }
  }

  let diffs = [];
  for (const key in letterPoolCounts) {
    const actualDistribution = iterationCounts[key] / iterationCounts.total;
    const expectedDistribution = letterPoolCounts[key] / letterPoolCounts.total;
    diffs.push(Math.abs(actualDistribution - expectedDistribution));
    // toBeCloseTo expected precision of 2 (second arg) means that expected difference <0.005
    expect(actualDistribution).toBeCloseTo(expectedDistribution, 2);
  }
});
