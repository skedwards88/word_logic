import {gridsMatchQ} from "./gridsMatchQ.js";

export function matrixesMatchQ<
  T extends string | number | boolean | null | undefined,
>(
  matrixGridsA: Record<string, T[][]>,
  matrixGridsB: Record<string, T[][]>,
): boolean {
  // exit early if we got the exact same object
  if (matrixGridsA === matrixGridsB) {
    return true;
  }

  // exit early if we didn't get valid input
  if (
    typeof matrixGridsA !== "object" ||
    typeof matrixGridsB !== "object" ||
    !matrixGridsA ||
    !matrixGridsB
  ) {
    return false;
  }

  const matrixAKeys = Object.keys(matrixGridsA);
  const matrixBKeys = Object.keys(matrixGridsB);
  if (matrixAKeys.length !== matrixBKeys.length) {
    return false;
  }

  for (const key of matrixAKeys) {
    if (!matrixBKeys.includes(key)) {
      return false;
    }

    const matrixAGrid = matrixGridsA[key];
    const matrixBGrid = matrixGridsB[key];

    if (!gridsMatchQ(matrixAGrid, matrixBGrid)) {
      return false;
    }
  }

  return true;
}
