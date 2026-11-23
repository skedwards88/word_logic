import type {Letter, LetterQu} from "./Types.js";

// This should give a type error if I add/remove an entry in the LetterQu type and don't update it here
const letterQuValid: Record<LetterQu, true> = {
  A: true,
  B: true,
  C: true,
  D: true,
  E: true,
  F: true,
  G: true,
  H: true,
  I: true,
  J: true,
  K: true,
  L: true,
  M: true,
  N: true,
  O: true,
  P: true,
  Qu: true,
  QU: true,
  R: true,
  S: true,
  T: true,
  U: true,
  V: true,
  W: true,
  X: true,
  Y: true,
  Z: true,
};
// This should give a type error if I add/remove an entry in the Letter type and don't update it here
const letterValid: Record<Letter, true> = {
  A: true,
  B: true,
  C: true,
  D: true,
  E: true,
  F: true,
  G: true,
  H: true,
  I: true,
  J: true,
  K: true,
  L: true,
  M: true,
  N: true,
  O: true,
  P: true,
  Q: true,
  R: true,
  S: true,
  T: true,
  U: true,
  V: true,
  W: true,
  X: true,
  Y: true,
  Z: true,
};

export function isLetterQu(input: unknown): input is LetterQu {
  return typeof input === "string" && Object.hasOwn(letterQuValid, input);
}

export function isLetter(input: unknown): input is Letter {
  return typeof input === "string" && Object.hasOwn(letterValid, input);
}
