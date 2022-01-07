export function twoNumberSum(array: number[], targetSum: number) {
  if (array.length < 2) {
		return [];
	}
	
	for(let i = 0; i < array.length; i++) {
		for(let j = i + 1; j < array.length; j++) {
			console.log(i, j)
			if(array[i] + array[j] === targetSum) {
				return [array[i],array[j]];
			}
		}
	}
	
  return [];
}
