// STACK
// LIFO (Last In - First Out)

class LIFOStack {
  maxSize = 3;
  container = [];

  push(data) {
    if (this.container.length < this.maxSize) {
      this.container.push(data);
    }
  }
  pop() {
    this.container.pop();
  }
}
let newStack = new LIFOStack();
newStack.push("Page-01");
newStack.push("Page-02");
newStack.push("Page-03");
newStack.pop();
newStack.push("Page-04");
newStack.push("Page-05");

console.log(newStack);

// QUEUE
// FIFO (First In - First Out)

class FIFOStack {
  maxSize = 3;
  container = [];

  push(data) {
    if (this.container.length < this.maxSize) {
      this.container.push(data);
    }
  }
  shift() {
    this.container.shift();
  }
}
let newStack1 = new FIFOStack();
newStack1.push("Page-01");
newStack1.push("Page-02");
newStack1.push("Page-03");
newStack1.shift();
newStack1.push("Page-04");
newStack1.push("Page-05");

console.log(newStack1);

// SET
const buah = ["Apel", "Anggur", "Mangga", "Apel", "Nangka"];
const newBuah = new Set(buah);
// console.log(newBuah)
newBuah.add("Semangka");
newBuah.add("Anggur");
// console.log(newBuah)
newBuah.delete("Anggur");
// console.log(newBuah)
console.log(newBuah.has("Apel")); // akan bersifat Boolean
// newBuah.entries('Apel','Anggur')
console.log(newBuah);

const campus = ["BSD", "JKT", "BDG", "BTM"];
const newCamp = new Set(campus);

const campusEntries = newCamp.entries();

let text = " ";
for (const entry of campusEntries) {
  text += entry;
}
console.log(text);

newCamp.forEach((item) => {
  console.log(item);
});

campus.forEach((index, item) => {
  console.log(index);
  console.log(item);
});

// LINKED LIST
// SINGLE LINKED
const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

console.log(list.head.next);

//  Linked List Implementation

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // ADD ELEMENT
  add(element) {
    // Create new node
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      // iterate to the end of the list
      // note : end of the list -> next === null
      while (current.next) {
        current = current.next;
      }
      // add node
      current.next = node;
    }
    this.size += 1;
  }
  // Method printList in LinkedList
  printList() {
    var curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }
  // Method insertAt in LinkedList
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please Enter a valid index");
    else {
      const node = new Node(element);
      let curr = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let prev;
        let it = 0;

        while (it < index) {
          it++;
        }
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }
        prev.next = node;
        node.next = curr;
      }
      this.size += 1;
    }
  }
  // Method removeAt in LinkedList
  removeAt(index) {
    if (index < 0 || index >= this.size)
      return console.log("Please Enter a valid index");
    else {
      let curr = this.head;
      let prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size -= 1;
      return curr.element;
    }
  }
  removeElement(element) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size -= 1;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return null;
  }
}

const linkedList = new LinkedList();
linkedList.add("A");
linkedList.add("B");
linkedList.add("C");
linkedList.add("D");
linkedList.insertAt("NewValue", 2);
linkedList.removeElement("B");
linkedList.removeAt(3);

linkedList.printList();
