import {arraysMatchQ} from "./arraysMatchQ";
import type {Primitive} from "./Types";

test("True when arrays contain same items in same order", () => {
  const arrayA = ["CAT", "DOG", "ELEPHANT", 2];
  const arrayB = ["CAT", "DOG", "ELEPHANT", 2];

  expect(arraysMatchQ(arrayA, arrayB)).toEqual(true);
  expect(arraysMatchQ(arrayB, arrayA)).toEqual(true);
});

test("False when arrays contain same items in different order", () => {
  const arrayA = ["CAT", "DOG", "ELEPHANT"];
  const arrayB = ["CAT", "ELEPHANT", "DOG"];

  expect(arraysMatchQ(arrayA, arrayB)).toEqual(false);
  expect(arraysMatchQ(arrayB, arrayA)).toEqual(false);
});

test("False when array is subset of other", () => {
  const arrayA = ["CAT", "DOG", "ELEPHANT", "COW"];
  const arrayB = ["CAT", "DOG", "ELEPHANT"];

  expect(arraysMatchQ(arrayA, arrayB)).toEqual(false);
  expect(arraysMatchQ(arrayB, arrayA)).toEqual(false);
});

test("False when array is subset of other", () => {
  const arrayA = ["CAT", "DOG", "ELEPHANT", "COW"];
  const arrayB = ["CAT", "DOG", "ELEPHANT"];

  expect(arraysMatchQ(arrayA, arrayB)).toEqual(false);
  expect(arraysMatchQ(arrayB, arrayA)).toEqual(false);
});

test("Does not consider deeper equalities", () => {
  const arrayA = ["CAT", "DOG", "ELEPHANT", 2, {item: "skates"}];
  const arrayB = ["CAT", "DOG", "ELEPHANT", 2, {item: "skates"}];

  expect(
    arraysMatchQ(
      arrayA as unknown as Primitive[],
      arrayB as unknown as Primitive[],
    ),
  ).toEqual(false);
  expect(
    arraysMatchQ(
      arrayB as unknown as Primitive[],
      arrayA as unknown as Primitive[],
    ),
  ).toEqual(false);
});
