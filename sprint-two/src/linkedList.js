var LinkedList = function() {
  var list = {};
  list.head = {};
  list.tail = {};

  list.addToTail = function(val) {
    //first check to see if you've got nothing, then instantiate 
    if ((_.isEmpty(list.head)) && (_.isEmpty(list.tail))) {
      list.head.value = val;
      list.head.next = {};
      list.tail.value = val;
      list.tail.next = null;
    } else {
      //define tail with new val 
      list.tail.value = val;
      list.tail.next = null;
      //fix the chain's tail with new values
      list.findEnd.next = val;
      list.findEnd.next = null;
    }

  };

  list.findNode = function(searchValue) {
    var currentNode = list.head;
    //returns node with intended searchValue
    while(currentNode) {
      if (currentNode.value === searchValue) {
        return currentNode;
      }
      currentNode = currentNode.next; 
    }
    //else return null if not found
    return null;
  };

  list.findEnd = function() {
    var currentNode = list.head;
    //returns node with intended searchValue
    while(currentNode) {
      if (currentNode.next === null) {
        //the end should have null as its next value, so return that node son!
        return currentNode;
      }
      currentNode = currentNode.next; 
    }
    //else return, just in case
    return null;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head.next.head = list.head.next.value;
    delete list.head;
    return temp;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
