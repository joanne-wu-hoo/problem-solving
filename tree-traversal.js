// DFS w/ stack (LIFO) so push and pop
const dfsFind = (val) => {
  let toVisitStack = [];

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
const bfsFind = (val) => {
  let toVisitQueue = [];

  while (toVisitQueue.length){
    let current = toVisitQueue.unshift();

    if (current.val === val) return true;

    for (let child of current){
      toVisitQueue.push(child)
    }
  }

  return false;
}
