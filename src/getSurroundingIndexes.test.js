import {getSurroundingIndexes} from "./getSurroundingIndexes";

test("top left corner", () => {
  const surrounding = getSurroundingIndexes({
    index: 0,
    numColumns: 5,
    numRows: 17,
  });
  const expected = [0, 1, 5, 6];

  expect(surrounding).toEqual(expect.arrayContaining(expected));
  expect(surrounding.length).toEqual(expected.length);
});

test("top right corner", () => {
  const surrounding = getSurroundingIndexes({
    index: 3,
    numColumns: 4,
    numRows: 14,
  });
  const expected = [2, 3, 6, 7];

  expect(surrounding).toEqual(expect.arrayContaining(expected));
  expect(surrounding.length).toEqual(expected.length);
});

test("top middle", () => {
  const surrounding = getSurroundingIndexes({
    index: 2,
    numColumns: 4,
    numRows: 31,
  });
  const expected = [1, 2, 3, 5, 6, 7];

  expect(surrounding).toEqual(expect.arrayContaining(expected));
  expect(surrounding.length).toEqual(expected.length);
});

test("left middle", () => {
  const surrounding = getSurroundingIndexes({
    index: 10,
    numColumns: 5,
    numRows: 17,
  });
  const expected = [5, 6, 10, 11, 16, 15];

  expect(surrounding).toEqual(expect.arrayContaining(expected));
  expect(surrounding.length).toEqual(expected.length);
});

test("center", () => {
  const surrounding = getSurroundingIndexes({
    index: 12,
    numColumns: 5,
    numRows: 7,
  });
  const expected = [6, 7, 8, 11, 12, 13, 16, 17, 18];

  expect(surrounding).toEqual(expect.arrayContaining(expected));
  expect(surrounding.length).toEqual(expected.length);
});

test("bottom left corner", () => {
  const surrounding = getSurroundingIndexes({
    index: 12,
    numColumns: 4,
    numRows: 4,
  });
  const expected = [8, 9, 12, 13];

  expect(surrounding).toEqual(expect.arrayContaining(expected));
  expect(surrounding.length).toEqual(expected.length);
});

test("bottom middle", () => {
  const surrounding = getSurroundingIndexes({
    index: 13,
    numColumns: 3,
    numRows: 5,
  });
  const expected = [9, 10, 11, 12, 13, 14];

  expect(surrounding).toEqual(expect.arrayContaining(expected));
  expect(surrounding.length).toEqual(expected.length);
});

test("bottom right corner", () => {
  const surrounding = getSurroundingIndexes({
    index: 24,
    numColumns: 5,
    numRows: 5,
  });
  const expected = [18, 19, 23, 24];

  expect(surrounding).toEqual(expect.arrayContaining(expected));
  expect(surrounding.length).toEqual(expected.length);
});
