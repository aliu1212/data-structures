var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var kidTree = new Tree(value);
  this.children.push(kidTree);
};

treeMethods.contains = function(target) {
  
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      var childHas = this.children[i].contains(target);
      if (childHas) {
        return true;
      }
    }
  } 
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
