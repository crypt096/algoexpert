export function findThreeLargestNumbers(array: number[]) {
  if(array.length <= 3) {
		return array.sort((a,b) => ( a - b));
	} else {
		let max1:number = -Infinity;
		let max2:number = -Infinity;
		let max3:number = -Infinity;
	
		for(let i = 0; i < array.length; i++) {
			if(array[i] >= max1) {
				max3 = max2;
				max2 = max1;
				max1 = array[i];
			} else if(array[i] <= max1 && array[i] >= max2) {
				max3 = max2;
				max2 = array[i];
			} else if(array[i] <= max2 && array[i] >= max3) {
				max3 = array[i];
			}
		}

			return[max3, max2, max1];
		}
}
