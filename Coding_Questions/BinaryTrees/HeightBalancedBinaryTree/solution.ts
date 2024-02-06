// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  isBalanced: boolean;
  height: number;

  constructor(isBalanced: boolean, height: number) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

export function heightBalancedBinaryTree(tree: BinaryTree) {
  const treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}

function getTreeInfo(node: BinaryTree | null): TreeInfo {
  if (node === null) return new TreeInfo(true, -1);

  const leftSubtreeInfo = getTreeInfo(node.left);
  const rightSubtreeInfo = getTreeInfo(node.right);

  const isBalanced = leftSubtreeInfo.isBalanced && rightSubtreeInfo.isBalanced && Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;
  const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;
  return new TreeInfo(isBalanced, height);
}
