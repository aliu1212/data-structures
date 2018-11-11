

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

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

  //double in size as needed
  let count = 0;
  for (let k = 0; k < this._limit; k++) {
    if (this._storage.get(k)) {
      count++;
    }
  }
  // console.log("limit ", this._limit);
  // console.log("75% ", 0.75 * this._limit);
  // console.log("count", count)
  // console.log(count >= 0.75 * this._limit);
  if (count >= (0.75 * this._limit)) {
    let temp = this._storage;
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    for (let v = 0; v < temp.length; v++) {
      this._storage.set(v, temp[v]);
    }
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


