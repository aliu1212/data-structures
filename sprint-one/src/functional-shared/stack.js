var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    index: 0
  };
  _.extend(instance, stackMethods);

  return instance;
};


var stackMethods = {
  push: function(value) {
    this.index += 1;
    this[this.index] = value;
  },
  pop: function() {
    var temp = this[this.index];
    delete this[this.index];
    if (this.index > 0) {
      this.index--;
    }
    return temp;
  },
  size: function() {
    return this.index;
  }
};
