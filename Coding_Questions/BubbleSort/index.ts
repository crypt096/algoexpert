export function bubbleSort(array: number[]) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - 1; ++j) {
      if(array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }

  return array;
}

function swap(arr: number[], currentIndex: number, nextIndex: number) {
  const temp = arr[currentIndex];
  arr[currentIndex] = arr[nextIndex];
  arr[nextIndex] = temp;
}