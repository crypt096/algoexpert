// O(n) time | O(d) space - where n is the number of nodes in the BST and d is the depth of the BST

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBst(tree: BST) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree: BST | null, minValue: number, maxValue: number): boolean {
  if(tree === null) return true;
  if(tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}

