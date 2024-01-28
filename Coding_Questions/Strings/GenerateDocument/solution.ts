export function generateDocument(characters: string, document: string) {
  for (const character of document) {
    const documentFrequency = countCharacterFrequency(character, document);
    const charactersFrequency = countCharacterFrequency(character, characters);
    if (documentFrequency > charactersFrequency) return false;
  }

  return true;
}

function countCharacterFrequency(character: string, target: string) {
  let frequency = 0;
  for (const char of target) {
    if (char === character) frequency++;
  }

  return frequency;
}
