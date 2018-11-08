var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stacky = Object.create(stackMethods);
  stacky.index = 0;
  return stacky;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.index += 1;
  this[this.index] = value;
};

stackMethods.pop = function() {
  var temp = this[this.index];
  delete this[this.index];
  if (this.index > 0) {
    this.index--;
  }
  return temp;
};

stackMethods.size = function() {
  return this.index;
};