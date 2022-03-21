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
}

let linkedList = new LinkedList();
linkedList.addToTail("TAIL");
linkedList.addToTail("TAIL2");
linkedList.addToHead("head");
linkedList.printList();
