class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.tail = 0;
    this.head = 1;
  }

  enqueue(value) {
    this.tail++;
    this[this.tail] = value;
  }
  
  dequeue() {
    var temp = this[this.head];
    delete this[this.head];
    this.head++;
    return temp;
  }
  
  size() {
    return Math.max(0, (this.tail-this.head + 1));
  }

}
