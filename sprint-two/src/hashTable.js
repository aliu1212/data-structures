

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
    adding.push([k, v]);
    this._storage.set(index, adding);
  } else {
    let inputs = [[k, v]];
    this._storage.set(index, inputs);
  }

  //***************************************
  //double in size as needed, NOT WORKING

  //         tried to get the current count of occupied indecies
  //         this is where i ran into errors
  // let count = 0;
  // this._storage.each(function(bucket, indexy, storagey) {
  //   if ((getIndexBelowMaxForKey(bucket, this._limit) !== undefined)) {
  //   //if (this._storage.get(getIndexBelowMaxForKey(bucket[0][0], this._limit)) !== undefined) {
  //     count++;
  //   }
  // });

  //          some console logs ofc
  // console.log("limit ", this._limit);
  // console.log("75% ", 0.75 * this._limit);
  // console.log("count", count)
  // console.log(count >= 0.75 * this._limit);

  //          here's where we'd call the double function, starting line 64 but didn't get the count from above
  // if (count >= (0.75 * this._limit)) {
  //   this._storage.double(this._storage, this._limit);
  // }
  //****************************************
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (let i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

//    the double function. never got it to run cause i couldn't check for 75% occupied
HashTable.prototype.double = function(oldHash, oldLimit) {
  //var index = getIndexBelowMaxForKey(k, this._limit);
  this._limit = oldLimit * 2;
  this._storage = LimitedArray(this._limit);
  oldHash.each(function(bucket) {
    for (let i = 0; i < bucket.length; i++) {
      this._storage.set(getIndexBelowMaxForKey(bucket[i][0], this._limit), bucket[i]);
    }
  });
  return this._storage;
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


