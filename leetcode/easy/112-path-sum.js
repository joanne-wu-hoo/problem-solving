// https://leetcode.com/problems/path-sum

const hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let stack = [[root,root.val]]
    while (stack.length) {
      let [cur, val] = stack.pop()
      if (!cur.left && !cur.right) {
        if (val == targetSum) return true;
      }
      if (cur.left) {
        stack.push([cur.left, val + cur.left.val]);
      }
      if (cur.right) {
        stack.push([cur.right, val + cur.right.val]);
      }
    }
    return false;
};
