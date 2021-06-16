// https://leetcode.com/problems/binary-tree-paths/

var binaryTreePaths = function(root) {
  if (!root) return [];

  let paths = [];

  // each entry in stack will contain [currentNode, pathUpUntilThisPoint]
  let toVisitStack = [[root, `${root.val}`]]

  while (toVisitStack.length){
    let [ currentNode, pathUpUntilThisPoint ] = toVisitStack.pop();

    if (!currentNode.left && !currentNode.right) paths.push(pathUpUntilThisPoint);

    if (currentNode.left) toVisitStack.push([currentNode.left, `${pathUpUntilThisPoint}->${currentNode.left.val}`]);
    if (currentNode.right) toVisitStack.push([currentNode.right, `${pathUpUntilThisPoint}->${currentNode.right.val}`]);
  }

  return paths;
};

