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
  return validate(tree, -Infinity, Infinity);
}

function validate(tree: BST | null, minValue: number, maxValue: number): boolean {
  if(tree === null) return true;
  if(tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validate(tree.left, minValue, tree.value);
  return leftIsValid && validate(tree.right, tree.value, maxValue);
}
