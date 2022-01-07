export function twoNumberSum(array: number[], targetSum: number) {
  const hashTable = new Map();

  for (const num of array) {
    if (hashTable.has(num)) {
      return [hashTable.get(num), num];
    }

    const diff = targetSum - num;
    hashTable.set(diff, num);
  }

  return [];
}