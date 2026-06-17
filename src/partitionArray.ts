export function partitionArray<T>(array: T[], partitionSize: number): T[][] {
  if (partitionSize <= 0) {
    throw new Error("Partition must be greater than 0");
  }

  const partitioned = [];
  for (let i = 0; i < array.length; i += partitionSize) {
    partitioned.push(array.slice(i, i + partitionSize));
  }
  return partitioned;
}
