export function commonCharacters(strings: string[]) {
  const charCounts: { [character: string]: number } = {};

  for (const string of strings) {
    const uniqueStringChars = new Set(string);
    for (const character of uniqueStringChars) {
      if(!(character in charCounts)) {
        charCounts[character] = 0;
      }

      charCounts[character]++;
    }
  }

  const finalChars: string[] = [];
  for (const [character, count] of Object.entries(charCounts)) {
    if (count === strings.length) {
      finalChars.push(character);
    }
  }

  return finalChars;
}
