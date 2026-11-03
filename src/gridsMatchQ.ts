import {arraysMatchQ} from "./arraysMatchQ.js";

export function gridsMatchQ<
  T extends string | number | boolean | null | undefined,
>(gridA: T[][], gridB: T[][]): boolean {
  if (!Array.isArray(gridA) || !Array.isArray(gridB) || !gridA || !gridB) {
    return false;
  }

  if (gridA.length !== gridB.length) {
    return false;
  }

  for (let rowIndex = 0; rowIndex < gridA.length; rowIndex++) {
    const rowA = gridA[rowIndex];
    const rowB = gridB[rowIndex];

    if (!arraysMatchQ(rowA, rowB)) {
      return false;
    }
  }

  return true;
}
