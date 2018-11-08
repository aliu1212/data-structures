class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
  }

  push(value) {
    this.index += 1;
    this[this.index] = value;
  }

  pop() {
    var temp = this[this.index];
    delete this[this.index];
    if (this.index > 0) {
      this.index--;
    }
    return temp;
  }

  size() {
    return this.index;
  }

}