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
  console.log(item)
});
