const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.top = null;
    this.size = 0;
  }

  getUnderlyingList() {

    if (this.size <= 1) {
      return;
    }

    return this.top.next;
  }

  enqueue(value) {

    const newNode = new ListNode(value);
    if (this.head === null && this.size < 1) {
      this.top = newNode;
      this.size++;
      return;
    }

    let current = this.top;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
    return;
  }

  dequeue() {

    if (this.size === 0) {
      return;
    }
    let topElement = this.top;
    this.top = this.top.next;
    this.size--;
    return topElement;
  }
}

module.exports = {
  Queue
};
