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
  return validateBSTHelper(tree, -Infinity, Infinity);
}

function validateBSTHelper(tree: BST | null, minValue: number, maxValue: number): boolean {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;

  const isLeftValid = validateBSTHelper(tree.left, minValue, tree.value);
  const isRightValid = validateBSTHelper(tree.right, tree.value, maxValue);

  return isLeftValid && isRightValid;
}

