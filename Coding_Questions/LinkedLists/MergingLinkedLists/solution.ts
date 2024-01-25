export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n + m) time | O(1) space - where n is the length of the first linked list and m is the length of the second linked list
export function mergingLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  let currentNodeOne: LinkedList | null = linkedListOne;
  let currentNodeTwo: LinkedList | null = linkedListTwo;

  while (currentNodeOne !== currentNodeTwo) {
    if (currentNodeOne === null) {
      currentNodeOne = linkedListTwo;
    } else {
      currentNodeOne = currentNodeOne.next;
    }

    if (currentNodeTwo === null) {
      currentNodeTwo = linkedListOne;
    } else {
      currentNodeTwo = currentNodeTwo.next;
    }
  }

  return currentNodeOne;
}
