export function binarySearch(array: number[], target: number): number {
  let left: number = 0;
  let right: number = array.length - 1;
  let middle: number = 0;

  while(left <= right) {
    middle = Math.floor((left + right) / 2);

    if(array[middle] === target) {
      return middle;
    } else if(array[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  
  return -1;
}