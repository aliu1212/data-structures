var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    head: 1,
    tail: 0
  };

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  
  enqueue: function(value) {
    this.tail++;
    this[this.tail] = value;
  },

  dequeue: function() {
    var temp = this[this.head];
    delete this[this.head];
    this.head++;
    return temp;
  },

  size: function() {
    return Math.max(0, (this.tail-this.head + 1));
  }

};


