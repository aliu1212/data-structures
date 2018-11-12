var dLinkedList = function() {
  var dlist = {};
  dlist.head = null;
  dlist.tail = null;

  dlist.addToTail = function(val) {
  
    var dubNodey = new Node(val);
    
    //is there a head? 
    if (!dlist.head) {
      dlist.head = dubNodey;
    } 
    //is there a tail yet?
    if (!dlist.tail) {
      dlist.tail = dubNodey;
      //if so, no need to continue further
      return;
    }

    dlist.tail.next = dubNodey;
    dubNodey.previous = dlist.tail;
    dlist.tail = dubNodey;
    
  };


  dlist.removeHead = function() {
    let temp = dlist.head.value;
    dlist.head = dlist.head.next;
    dlist.head.previous = null;
    return temp;
  };

  dlist.contains = function(target) {
    //let's try going from the TAIL now that it is a doubly linked list..
    let currentNode = dlist.tail;
    
    while(currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.previous; 
    }

    return false;
  };

  return dlist;
};

var dNode = function(value) {
  let node = {};

  node.previous = null;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

