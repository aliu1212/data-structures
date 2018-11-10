

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    for (let i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        let adding = this._storage.get(index);
        adding[i] = [k, v];
        this._storage.set(index, adding);
        return;
      }
    }
    let adding = this._storage.get(index);
    adding.push([k,v]);
    this._storage.set(index, adding);
  } else {
    let inputs = [[k,v]];
    this._storage.set(index, inputs);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (let i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (let i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      let without = this._storage.get(index);
      without[i] = [undefined, undefined];
      this._storage.set(index, without);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


