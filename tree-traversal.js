// DFS w/ stack (LIFO) so push and pop
const dfsFind = (root, val) => {
  let toVisitStack = [root];

  while (toVisitStack.length){
    let current = toVisitStack.pop();

    if (current.val === val) return true;

    for (let child of current.children){
      toVisitStack.push(child)
    }
  }

  return false;
}

// BFS w/ queue (FIFO) so push and unshift 
const bfsFind = (root, val) => {
  let toVisitQueue = [root];

  while (toVisitQueue.length){
    let current = toVisitQueue.unshift();

    if (current.val === val) return true;

    for (let child of current.children){
      toVisitQueue.push(child)
    }
  }

  return false;
}
