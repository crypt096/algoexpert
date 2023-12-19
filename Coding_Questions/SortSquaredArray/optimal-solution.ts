export function sortedSquaredArray(array: number[]) {
  if (array.length === 0) {
    return [];
  }

  let startPointer = 0;
  let endPointer = array.length - 1;

  const squaredArray: number[] = [];

  do {
    if (Math.abs(array[startPointer]) > Math.abs(array[endPointer])) {
      squaredArray.unshift(array[startPointer] ** 2);
      startPointer++;
    } else {
      squaredArray.unshift(array[endPointer] ** 2);
      endPointer--;
    }
  } while (startPointer <= endPointer)

  return squaredArray;
}
