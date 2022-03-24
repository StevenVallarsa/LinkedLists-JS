class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  printList() {
    let result = "<HEAD> ";
    let nextNode = this.head;
    while (nextNode) {
      result += nextNode.data + " ";
      nextNode = nextNode.next;
    }
    result += "<TAIL>";
    console.log(result);
  }

  addToHead(data) {
    const newHead = new Node(data);
    if (this.head) {
      newHead.next = this.head;
    }
    this.head = newHead;
  }

  addToTail(data) {
    const newTail = new Node(data);
    if (!this.head) {
      this.head = newTail;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newTail;
    }
  }

  removeHead() {
    if (!this.head) {
      console.log("This Linked List is empty");
    } else {
      console.log(this.head.data + " was removed");
      this.head = this.head.next;
    }
  }

  removeTail() {
    if (!this.head) {
      console.log("This Linked List is empty");
    } else {
      let currentNode = this.head;
      let previousNode = this.head;
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = null;
      console.log(currentNode.data + " was removed");
    }
  }

  isDataInList(data) {
    let count = 0;
    if (!this.head) {
      console.log("This Linked List is empty");
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.data === data) {
          count++;
        }
        currentNode = currentNode.next;
      }
    }
    return count;
  }
}

let linkedList = new LinkedList();
linkedList.addToTail("TAIL");
linkedList.addToTail("TAIL2");
linkedList.addToHead("Head");
// linkedList.addToHead("Head2");
// linkedList.addToTail("TAIL3");
// linkedList.addToHead("TAIL3");

// linkedList.removeTail();
// linkedList.removeHead();
linkedList.printList();
let number = linkedList.isDataInList("Head");
console.log(`The requested data appears ${number} time${number === 1 ? "" : "s"} in the Linked List`);
