import { indexToColumn } from "./indexToColumn.js";

describe("indexToColumn", () => {
  test("first index", () => {
    expect(indexToColumn(0,5)).toBe(0)
  })

  test("first row middle column", () => {
    expect(indexToColumn(3,5)).toBe(3)
  })

  test("first row last column", () => {
    expect(indexToColumn(4,5)).toBe(4)
  })

  test("middle index", () => {
    expect(indexToColumn(5,5)).toBe(0)
  })

  test("middle row middle column", () => {
    expect(indexToColumn(8,5)).toBe(3)
  })

  test("middle row last column", () => {
    expect(indexToColumn(9,5)).toBe(4)
  })

})
