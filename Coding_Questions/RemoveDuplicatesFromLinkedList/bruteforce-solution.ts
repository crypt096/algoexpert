export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
    console.log(linkedList);

    // return linkedList;
}

removeDuplicatesFromLinkedList([1, 1, 3, 4, 4, 5]);