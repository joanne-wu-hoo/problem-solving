// https://leetcode.com/problems/binary-tree-right-side-view/

var rightSideView = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let numNodesToVisit = 1;
    let output = [];
    
    while (queue.length){
        let currentLevelVals = [];
        
        while (numNodesToVisit){
            let current = queue.shift();
            currentLevelVals.push(current.val); 
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            numNodesToVisit--;
        }
        
        output.push(currentLevelVals[currentLevelVals.length-1])
        numNodesToVisit = queue.length;
    }
    
    return output;
};
