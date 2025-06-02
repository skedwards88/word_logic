export function partitionArray<T>(array: T[], partitionSize: number): T[][] {
  const partitioned = [];
  for (let i = 0; i < array.length; i += partitionSize) {
    partitioned.push(array.slice(i, i + partitionSize));
  }
  return partitioned;
}
