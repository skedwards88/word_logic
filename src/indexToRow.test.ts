import { indexToRow } from "./indexToRow.js";

describe("indexToRow", () => {
  test("first row middle", () => {
    expect(indexToRow(3,5)).toBe(0);
  })

  test("middle row middle", () => {
    expect(indexToRow(12,5)).toBe(2);
  })

  test("first index", () => {
    expect(indexToRow(0,5)).toBe(0);
  })

  test("first row last index", () => {
    expect(indexToRow(4,5)).toBe(0);
  })
})
