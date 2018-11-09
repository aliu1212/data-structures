var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val) {
  
    var nodey = new Node(val);
    
    //is there even a head yet??
    if (!list.head) {
      list.head = nodey;
    } 
    //...and is there a tail yet?
    if (!list.tail) {
      list.tail = nodey;
      //if so, no need to continue further
      return;
    }
    //redirect the old tail next while we still have access
    list.tail.next = nodey;
    //now the tail property can point to new tail
    list.tail = nodey;
    
  };


  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    
    while(currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next; 
    }
    //else return false if not found
    return false;
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

