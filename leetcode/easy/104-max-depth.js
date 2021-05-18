// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
  if (!root) return 0;

  let max = 0;
  let toVisit = [[root, 1]]
  // each entry in the stack contains:
  // 1. current node
  // 2. depth up until that point

  while (toVisit.length){
    let [cur, curDepth] = toVisit.pop();
    if (!cur.left && !cur.right){
      max = Math.max(max, curDepth);
    }

    if (cur.left){
      toVisit.push([cur.left, curDepth + 1]);
    }

    if (cur.right){
      toVisit.push([cur.right, curDepth + 1]);
    }
  }

  return max;
};
