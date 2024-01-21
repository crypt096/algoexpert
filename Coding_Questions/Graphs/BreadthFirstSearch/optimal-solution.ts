
// Time complexity: O(V + E)
// Space complexity: O(V)

export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  // O(V + E) time | O(V) space - where V is the number of vertices in the Graph and E is the number of edges in the Graph
  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];

    while (queue.length) {
      let current: Node | undefined = queue.shift();
      if (current) {
        array.push(current.name);
        current.children.forEach((child: Node) => {
          queue.push(child);
        })
      }
    }

    return array;
  }
}
