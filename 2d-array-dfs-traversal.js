const testMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const dfs = (matrix, row, col, seen, values) => {
  // BASE CASE -- return if:
  // - we are out of bounds (lt 0 or gte matrix row/col)
  // - we've seen the value
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]){
    return;
  }

  // STUFF TO DO EVERY ITERATION
  // update seen to true
  seen[row][col] = true
  // add to value
  values.push(matrix[row][col])

  // PROGRESS
  for (let i = 0; i < directions.length; i++){
    let currentDirections = directions[i];
    dfs(matrix, row + currentDirections[0], col + currentDirections[1], seen, values)
  }
}


const traversalDFS = (matrix) => {
  let numCols = matrix[0].length;
  let numRows = matrix.length;

  // initialize array to keep track of which values we've seen
  let seen = new Array(numRows).fill(0).map(() => new Array(numCols).fill(false));

  // initialize array to store values
  let values = [];

  dfs(matrix, 0, 0, seen, values);

  return values;
}

console.log(traversalDFS(testMatrix));
