// https://leetcode.com/problems/number-of-islands/

// Approach
// 1. Traverse through grid sequentially
// 2. When we encounter a 1:
//    - increment islandCount++
//    - BFS/DFS throughout island
//         - update values in grid to 0 (so that when we go back to sequential search we do not double count lands connected to already accounted for island)
//         - update seen to true
//         - note: only want to BFS/DFS land ie. square with 0

var directions = [
  [-1, 0], // top
  [0, 1], // right
  [1, 0], // down
  [0, -1] // left
]

// BFS
var numIslands = function(grid) {

  let islandCount = 0;

  let seen = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));

  for (let row = 0; row < grid.length; row++){
      for (let col = 0; col < grid[0].length; col++){
          if (grid[row][col] === "1"){
              islandCount++;

              let queue = [[row, col]];

              while (queue.length){
                  let [row, col] = queue.shift();
                   if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || seen[row][col] || grid[row][col] === "0") {
                       continue;
                   } else {
                       grid[row][col] = "0";
                       seen[row][col] = true;
                   }

                  for (let direction of directions){
                      let [rowDelta, colDelta] = direction;
                      queue.push([row+rowDelta, col+colDelta]);
                  }
              }
          }
      }
  }

  return islandCount;
};


// DFS

var dfsTraverse = (row, col, grid, seen) => {
  // base case -- return if:
  // 1. row/col is out of bounds (<0 or >= max row/col length)
  // 2. seen is true
  // 3. value is 0 (we only want to explore land ie. squares with 1's )
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || seen[row][col] || grid[row][col] === "0"){
    return;
  }

  // do
  // - update grid value to "0"
  // - update seen to true
  grid[row][col] = "0";
  seen[row][col] = true;

  // progress
  // iterate through directions + recurse with new direction
  for (let direction of directions){
    let [rowDelta, colDelta] = direction;
    dfsTraverse(row+rowDelta, col+colDelta, grid, seen);
  }
}

var numIslands = function(grid) {
  let islandCount = 0;
  let seen = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));

  for (let row = 0; row < grid.length; row++){
    for (let col = 0; col < grid[0].length; col++){
      // if we see a new island
      if (grid[row][col] === "1"){
        // increment island count
        islandCount++;

        // DFS through the island turning all "1"s to "0"s (so that when we go back to our sequential search, we don't double count islands)
        dfsTraverse(row, col, grid, seen)

      }
    }
  }

  return islandCount;
};




