

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.hasOwnProperty(node)) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes.hasOwnProperty(node)) {
    delete this.nodes[node];
  }
  for (let key in this.nodes) {
    for (let i = 0; i < this.nodes[key].length; i++) {
      if (this.nodes[key][i] === node) {
        this.nodes[key] = _.without(this.nodes[key], node);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (fromNode === toNode) {
    return true;
  }

  if (this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode)) {
    return true;
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  if (fromNode === toNode) {
    return;
  }

  if (this.nodes[fromNode])  {
    this.nodes[fromNode].push(toNode);
  }

  if (this.nodes[toNode]) {
    this.nodes[toNode].push(fromNode);
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  if (this.nodes[fromNode] !== undefined) {
    this.nodes[fromNode] = _.without(this[fromNode], toNode);
  }
  if (this.nodes[toNode] !== undefined) {
    this.nodes[toNode] = _.without(this[toNode], fromNode);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var key in this.nodes) {
    cb(JSON.parse(key));
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


