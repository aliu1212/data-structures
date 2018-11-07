var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  //extend(storage, stackMethods);
  //var index = 0;
  storage.push = stackMethods.push;
  storage.pop = stackMethods.pop;
  storage.size = stackMethods.size(storage);
  return storage;
};

// var extend = function(obj, methods) {
//   for (var key in obj) {
//     obj[key] = methods[key];
//   }
// }

var stackMethods = {};
stackMethods.push = function() {};
stackMethods.pop = function() {};
stackMethods.size = function(storage) {
  return Object.keys(storage).length;
};