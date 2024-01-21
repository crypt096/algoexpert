
// Time complexity: O(V + E)
// Space complexity: O(V)
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  // O(V + E) time | O(V) space - where V is the number of vertices in the Graph and E is the number of edges in the Graph
  depthFirstSearch(array: string[]) {
    array.push(this.name);

    this.children.forEach((childNode: Node) => {
      childNode.depthFirstSearch(array)
    });

    return array;
  }
}