

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let inputs = [k,v];
  // if (this._storage[index]) {
  //   let bucket = this._storage[index];
  //   inputs = bucket.push(inputs);
  // } 
  this._storage.set(index, inputs);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // let innerIndex = null;
  // if (this._storage[index]) {
  //   let bucket = this._storage[index];
  //   for (let i = 0; i < bucket.length; i++) {
  //     if (bucket[i][0] === k) {
  //       innerIndex = i;
  //     }
  //   }
  // } 
  //return this._storage.get(index)[innerIndex][1];
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var deletes = [undefined, undefined];
  this._storage.set(index, deletes);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


