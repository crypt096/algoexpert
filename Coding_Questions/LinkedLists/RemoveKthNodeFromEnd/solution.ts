export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space - where n is the length of the linked list
export function removeKthNodeFromEnd(head: LinkedList, k: number) {
  let counter = 1;
  let firstNode: LinkedList = head;
  let secondNode: LinkedList | null = head;

  while (counter <= k) {
    secondNode = secondNode!.next;
    counter++;
  }

  if (secondNode === null) {
    head.value = head.next!.value;
    head.next = head.next!.next;
    return;
  }

  while (secondNode.next !== null) {
    secondNode = secondNode.next;
    firstNode = firstNode.next!;
  }

  firstNode.next = firstNode.next!.next;
}
