import {partitionArray} from "./partitionArray.js";

test("works on array that can be partitioned evenly", () => {
  expect(partitionArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});

test("works on array that can't be partitioned evenly", () => {
  expect(partitionArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});

test("partition greater than array size means no partitioning but the input array does get nested", () => {
  expect(partitionArray([1, 2, 3, 4, 5, 6, 7, 8], 30)).toEqual([
    [1, 2, 3, 4, 5, 6, 7, 8],
  ]);
});

test("empty arrays just get returned (no nesting)", () => {
  expect(partitionArray([], 30)).toEqual([]);
});

test("partition of 0 errors", () => {
  expect(() => partitionArray([1, 2, 3, 4, 5, 6, 7, 8], 0)).toThrow(
    "Partition must be greater than 0",
  );
});
