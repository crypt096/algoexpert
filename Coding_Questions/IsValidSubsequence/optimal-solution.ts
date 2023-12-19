export function isValidSubsequence(array: number[], sequence: number[]) {
  if (array.length === 0 && sequence.length === 0) {
    return true;
  }

  let index = 0;
  for(let i = 0; i < array.length; i++) {
    if(index === sequence.length) {
      break;
    }

    if(array[i] === sequence[index] && index < sequence.length) {
      index++;
    }
  }

  return index === sequence.length;
}