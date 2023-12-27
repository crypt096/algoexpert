export function isPalindrome(string: string) {
  let startPointer = 0;
  let endPointer = string.length - 1;

  while (startPointer < endPointer) {
    if (string[startPointer] !== string[endPointer]) {
      return false;
    }

    startPointer++;
    endPointer--;
  }

  return true;
}
