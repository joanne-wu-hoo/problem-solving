// https://leetcode.com/problems/balanced-binary-tree/

function findHeight(node){
    if (!node) return 0;
    
    return 1 + Math.max(findHeight(node.left), findHeight(node.right));
}


function isBalanced(node) {
    if (!node) return true;
    
    // balanced if height right and left do not differ by more than 1
    // need to check all of the subtrees
   return isBalanced(node.right) && isBalanced(node.left) && Math.abs(findHeight(node.right) - findHeight(node.left)) < 2
};
