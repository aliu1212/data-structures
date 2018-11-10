var BinarySearchTree = function(value) {
  var newbsTree = Object.create(bsMethods);
  //this.bsTree = {};
  newbsTree.value = value;
  newbsTree.left = null;
  newbsTree.right = null;
  return newbsTree;
};

var bsMethods = {};

bsMethods.insert = function(val) {
  if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
};

bsMethods.contains = function(val) {

  if (this.value === val) {
    return true;
  }

  let leftHas = false;
  let rightHas = false;

  if (this.left !== null) {
    leftHas = this.left.contains(val);
  } 
  if (this.right !== null) {
    rightHas = this.right.contains(val);
  } 
  if (leftHas || rightHas) {
    return true;
  }
  
  return false;

};

bsMethods.depthFirstLog = function(cb) {

  cb(this.value);
    
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  } 
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  } 

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
