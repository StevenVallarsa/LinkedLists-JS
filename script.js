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
      let nextNode = this.head;
      let lastNode = this.head;
      while (nextNode) {
        nextNode = nextNode.next;
        if (nextNode) {
          lastNode = nextNode;
        }
      }
      lastNode.next = newTail;
    }
  }

  removeHead() {
    if (!this.head) {
      console.log("This Linked List is empty");
    } else {
      this.head = this.head.next;
    }
  }
}

let linkedList = new LinkedList();
linkedList.addToTail("TAIL");
linkedList.addToHead("Head");
linkedList.addToHead("Head2");
linkedList.addToTail("TAIL3");
linkedList.addToTail("TAIL3");

linkedList.removeHead();
linkedList.printList();
