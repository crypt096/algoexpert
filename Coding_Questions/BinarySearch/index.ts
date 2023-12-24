export function binarySearch(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];

    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
