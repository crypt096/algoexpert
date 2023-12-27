export function firstNonRepeatingCharacter(string: string) {
  const charFrequenciesMap: {[char: string]: number } = {};

  for(const char of string) {
    if(!(char in charFrequenciesMap)) charFrequenciesMap[char] = 0;
    charFrequenciesMap[char]++;
  }

  for(let idx = 0; idx < string.length; idx++) {
    const char = string[idx];
    if (charFrequenciesMap[char] === 1 ) {
      return idx;
    }
  }

  return -1;
}
