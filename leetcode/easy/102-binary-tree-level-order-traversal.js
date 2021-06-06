// https://leetcode.com/problems/binary-tree-level-order-traversal/

// BFS - queue - push/shift

// Values will be the values that are returned by BFS, but we need a way to determine when we're at a new level

// When we're at the root, we have 1 node to visit -- so our numNodesToVisit = 1
// While numNodesToVisit > 0:
// - Add values to our currentLevel [] 
// - Keep on adding to our toVisit queue as normal
// When numNodesToVisit = 0, we've finished a level:
// - numNodesToVisit for the next level is now the length of the toVisit queue
// - Add currentLevel[] to output[]

var levelOrder = function(root) {
    if (!root) return [];
    
    let toVisit = [root];
    let output = [];
    let numNodesToVisit = 1;
    
    while (toVisit.length){
        let currentLevel = [];
        
        while (numNodesToVisit){
            let currentNode = toVisit.shift();
            currentLevel.push(currentNode.val);
            if (currentNode.left) toVisit.push(currentNode.left)
            if (currentNode.right) toVisit.push(currentNode.right)
            numNodesToVisit--;
        }
        
        numNodesToVisit = toVisit.length;
        output.push(currentLevel);
    }  
    
    return output;
}
