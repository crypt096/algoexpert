export function caesarCipherEncryptor(word: string, key: number) {
  if(word.length < 1) {
		return ''
	}
	
	if(key === 0) {
		return word;
	}
	
	const newLetters = [];
	const newKey = key % 26;
	
	for(let i of word) {
		newLetters.push(getNewLetter(i, newKey))
	}
	
	return newLetters.join('');
}

function getNewLetter(letter: string, key: number) {
	const newLetterCode = letter.charCodeAt(0) + key;
	return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122))
}
