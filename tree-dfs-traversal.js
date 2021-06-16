// DFS - stack - LIFO push/pop

// In order
function traverseInOrderDFS = (node = root, data=[]) => {
  if (!node) return [];
  
  if (node.left) traverseInOrderDFS(node.left);
  data.push(node.val);
  if (node.right) traverseInOrderDFS(node.right);
  
  return data;
}

// Pre order
function traversePreOrderDFS = (node = root, data=[]) => {
  if (!node) return [];
  
  data.push(node.val);
  if (node.left) traverseInOrderDFS(node.left);
  if (node.right) traverseInOrderDFS(node.right);
  
  return data;
}

// Post order 
function traversePostOrderDFS = (node = root, data=[]) => {
  if (!node) return [];
  
  if (node.left) traverseInOrderDFS(node.left);
  if (node.right) traverseInOrderDFS(node.right);
  data.push(node.val);
  
  return data;
}
