// https://leetcode.com/problems/average-of-levels-in-binary-tree/

var averageOfLevels = function(root) {
  if (!root) return null;
  
  let avgs = [];
  
  let toVisitQueue = [root];
  let numNodesInLevel = 1;
  
  while (toVisitQueue.length){
    let sum = 0;
    let divisor = numNodesInLevel;
        
    // while there are still nodes in level
    while (numNodesInLevel){
      let currentNode = toVisitQueue.shift();
      // add node value to sum
      sum += currentNode.val;
      // add node's children to the queue
      if (currentNode.left) toVisitQueue.push(currentNode.left);
      if (currentNode.right) toVisitQueue.push(currentNode.right);
      numNodesInLevel--
    }
    
    // if numNodesInLevel = 0, we are at the end of a level
    let avg = sum/divisor;
    avgs.push(avg);
    // new numNodesInLevel is the length of the queue
    numNodesInLevel = toVisitQueue.length;
  }
  
  return avgs;
};

/** 

let avgs = [];

// -------------

bfs, but need to keep track of when a new level starts
bfs = queue = FIFO = push/shift

let numNodesInLevel = 1;

while (numNodesInLevel){
    // add current node to sum
    // add current node's children to stack to visit
    // numNodesInLevel--;
}

// when numNodesInLevel = 0, we are at the end of the first level,
// the length of the stack is the new numNodesInLevel
// find avg + add to avg stack


// ---------------

return avgs;

*/

