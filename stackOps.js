class Stack {
  constructor() {
    this.items = [];
  }

  add(element) {
    this.items.push(element);
  }

  remove() {
    if (this.isEmpty()) {
      return "The stack is empty!!!";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "The stack is empty!!!";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log("Stack items: " + stack.items);

stack.remove();
console.log("Stack items: " + stack.items);

console.log("Last item of the stack: " + stack.peek());

console.log("Is the stack empty: " + stack.isEmpty());

console.log("Size of the stack: " + stack.size());

stack.clear();
console.log("Stack items: " + stack.items);

console.log("Is the stack empty: " + stack.isEmpty());
console.log("Size of the stack: " + stack.size());
