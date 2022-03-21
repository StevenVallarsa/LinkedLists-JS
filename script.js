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
    console.log(newHead);
    if (this.head) {
      newHead.next = this.head;
    }
    this.head = newHead;
  }
}

let linkedList = new LinkedList();
linkedList.addToHead("One");
linkedList.addToHead("Two");
linkedList.addToHead("Three");
linkedList.printList();
