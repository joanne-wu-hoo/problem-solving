// https://leetcode.com/problems/number-of-islands/

// Approach
// 1. Traverse through grid sequentially
// 2. When we encounter a 1:
//    - increment islandCount++
//    - BFS/DFS throughout island
//         - only add 1's to queue
//         - update values in grid to 0
//         - update seen to true

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

