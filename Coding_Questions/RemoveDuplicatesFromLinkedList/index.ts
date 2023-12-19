// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let currentNode: LinkedList | null = linkedList;
  let nextNode: LinkedList | null = linkedList.next;

  while(!!currentNode) {
    if (currentNode.value !== nextNode?.value) {
      currentNode.next = nextNode;
      currentNode = nextNode;
    }

    nextNode = nextNode?.next || null;
  }
  
  return linkedList;
}
