export function sortedSquaredArray(array: number[]) {
  if (array.length === 0) {
    return [];
  }

  return array.map(e => e * e).sort((a, b) => a - b);
}