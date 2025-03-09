class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Underflow';
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return 'No elements in Queue';
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

const queue = new Queue();
queue.enqueue(10);
console.log(queue.front());
queue.enqueue(20);
console.log(queue.front());
queue.enqueue(30);
console.log(queue.front());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue()); // Underflow