import {gridsMatchQ} from "./gridsMatchQ.js";

describe("gridsMatchQ", () => {
  test("returns true if the grids are equal", () => {
    const gridA = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
      [true, false, false],
    ];
    const gridB = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
      [true, false, false],
    ];
    expect(gridsMatchQ(gridA, gridB)).toBe(true);
  });

  test("returns false if the grids are not equal", () => {
    const gridA = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
      [true, false, false],
    ];
    const gridB = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
      [true, true, false],
    ];
    expect(gridsMatchQ(gridA, gridB)).toBe(false);
  });

  test("false if input is not an array", () => {
    const gridA = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
      [true, false, false],
    ];
    const gridB = {
      a: [
        [true, false, false],
        [false, false, true],
        [false, true, false],
        [true, true, false],
      ],
    };

    // @ts-expect-error intentionally testing invalid input
    expect(gridsMatchQ(gridA, gridB)).toBe(false);
  });

  test("false if inputs are different lengths", () => {
    const gridA = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
      [true, false, false],
    ];
    const gridB = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
    ];

    expect(gridsMatchQ(gridA, gridB)).toBe(false);
  });

  test("false if a row is not an array", () => {
    const gridA = [
      [true, false, false],
      true,
      [false, true, false],
      [true, false, false],
    ];
    const gridB = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
      [true, true, false],
    ];

    // @ts-expect-error intentionally testing invalid input
    expect(gridsMatchQ(gridA, gridB)).toBe(false);
  });

  test("false if rows are different lengths", () => {
    const gridA = [
      [true, false, false],
      [true],
      [false, true, false],
      [true, false, false],
    ];
    const gridB = [
      [true, false, false],
      [false, false, true],
      [false, true, false],
      [true, true, false],
    ];

    expect(gridsMatchQ(gridA, gridB)).toBe(false);
  });
});
