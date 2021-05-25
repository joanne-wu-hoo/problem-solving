const testMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const matrixBFStraversal = (matrix) => {
  let values = [];
  let queue = [[0,0]];
  let seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

  while (queue.length){ // check queue.length, not just queue
    let current = queue.shift();
    let row = current[0];
    let col = current[1];

    // if we're out of bounds OR we've seen the value, then continue
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) {
      continue;
    }  else {
      // else add to seen + values
      seen[row][col] = true;
      values.push(matrix[row][col]);
    }

    // iterate through directions and add to queue
    for (let direction of directions){
      let rowDelta = direction[0];
      let colDelta = direction[1];
      queue.push([row+rowDelta, col+colDelta])
    }
  }

  return values;
}

console.log(matrixBFStraversal(testMatrix));
