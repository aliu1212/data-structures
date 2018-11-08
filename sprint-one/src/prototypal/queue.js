var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stacky = Object.create(queueMethods);
  stacky.tail = 0;
  stacky.head = 1;
  return stacky;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.tail++;
  this[this.tail] = value;
};

queueMethods.dequeue = function() {
  var temp = this[this.head];
  delete this[this.head];
  this.head++;
  return temp;
};

queueMethods.size = function() {
  return Math.max(0, (this.tail-this.head + 1));
};

