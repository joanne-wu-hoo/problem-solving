/* starOutGrid:
- Given an NxM grid with "*"s in it
- Return the SAME grid with 
    - the row containing the "*" all "*"-ed out and
    - the value at the index in the other rows converted into a "*" 
*/

function starOutGrid(grid){
  let numRows = grid.length;
  let numCols = grid[0].length;

  // create arrays of size numRows and numCols, initialize values to false
  let clearRows = Array(numRows).fill(false);
  let clearCols = Array(numCols).fill(false);

  // pass 1: go through grid, determine which rows and cols contain a star, set those vals to true
  for (let r=0; r<numRows; r++){
    for (let c=0; c<numCols; c++){
      if (grid[r][c] === "*"){
        clearRows[r] = true;
        clearCols[c] = true;
      }
    }
  }

  // pass 2: go through grid, if we're in a row or col where there was a star, set val to star
  for (let r=0; r<numRows; r++){
    for (let c=0; c<numCols; c++){
      if (clearRows[r] || clearCols[c]){
        grid[r][c] = "*";
      }
    }
  }

  return grid;
}

console.log(starOutGrid([
  ["A", "B", "C"],
  ["D", "E", "*"],
  ["G", "H", "I"],
]))

// [["A", "B", "*"],
//  ["*", "*", "*"],
//  ["G", "H", "*"]]

