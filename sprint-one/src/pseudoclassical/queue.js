var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.tail = 0;
  this.head = 1;
};

Queue.prototype.enqueue = function(value) {
  this.tail++;
  this[this.tail] = value;
};

Queue.prototype.dequeue = function() {
  var temp = this[this.head];
  delete this[this.head];
  this.head++;
  return temp;
};

Queue.prototype.size = function() {
  return Math.max(0, (this.tail-this.head + 1));
};

