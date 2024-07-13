class Queue {
  constructor() {
    this.items = [];
  }

  add(element) {
    this.items.push(element);
  }

  remove() {
    if (this.isEmpty()) {
      return "The queue is empty!!!";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "The queue is empty!!!";
    }
    return this.items[0];
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

let queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(4);
queue.add(8);
console.log("Queue items: " + queue.items);

queue.remove();
console.log("Queue items: " + queue.items);

console.log("First item of the queue: " + queue.peek());

console.log("Is the queue empty: " + queue.isEmpty());

console.log("Size of the queue: " + queue.size());

queue.clear();
console.log("Queue items: " + queue.items);

console.log("Is the queue empty: " + queue.isEmpty());
console.log("Size of the queue: " + queue.size());
