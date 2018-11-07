var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    index++;
    storage[index] = value;
  };

  someInstance.pop = function() {
    var val = storage[index];
    delete storage[index];
    index--;
    return val;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
