var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 1;
  var tail = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    tail++;
    storage[tail] = value;
  };

  someInstance.dequeue = function() {
    var val = storage[head];
    delete storage[head];
    head++;
    return val;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
