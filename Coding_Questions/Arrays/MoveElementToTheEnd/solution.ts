export function moveElementToEnd(array: number[], toMove: number) {
  let startPointer = 0;
  let endPointer = array.length - 1;

  while (startPointer < endPointer) {
    while (startPointer < endPointer && array[endPointer] === toMove) endPointer--;
    if (array[startPointer] === toMove) swap(startPointer, endPointer, array);
    startPointer++;
  }

  return array;
}

function swap(i: number, j: number, array: number[]) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
