export function isPalindrome(string: string) {
  let reversedStr = '';

  for(let i = string.length - 1; i >= 0; i--) {
    reversedStr+=string[i];
  }

  return string === reversedStr;
}
