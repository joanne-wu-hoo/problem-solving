// https://leetcode.com/problems/game-of-life/

/** Approach
initialize a new board of the same size

go through board sequentially

for each value, go through all of its neighbors (dfs) and:
- calculate the number of live neighbors
- based on rules, determine what value needs to go in new board and fill it in

at end return new board

*/
    
var gameOfLife = function(board) {
    let newBoard = new Array(board.length).fill(null).map(() => new Array(board[0].length).fill(null));
    
    for (let r = 0; r < board.length; r++){
        for (let c = 0; c < board[0].length; c++){
            // dfs around neighbors to get live neighbor count
            // based on live neighbor count, determine what to put in new board
            
            let liveNeighborCount = getLiveNeighborCount(r, c, board)
            
            let newBoardValue = getNewBoardValue(board[r][c], liveNeighborCount);
            newBoard[r][c] = newBoardValue;        
        }
    }
    
    board = newBoard;
    return board;
};

/** dfs around the cell to all its neighbors, return liveNeighborCount */

const directions = [
  [-1, -1], // diagonal left
  [-1,0], // top
  [-1,1], // diagonal right
  [0, -1], // left
  [0, 1], // right
  [1,-1], // diagonal bottom left
  [1,0], // bottom
  [1,1] // diagonal bottom right
]

function getLiveNeighborCount(row, col, board){
    let liveNeighborCount = 0;
    
    for (let [rowIdxDelta, colIdxDelta] of directions){
        let newRowIdx = row+rowIdxDelta;
        let newColIdx = col+colIdxDelta;
        
        // if we're out of bounds continue;
        if (newRowIdx < 0 || newRowIdx >= board.length) continue;

        liveNeighborCount += (board[row+rowIdxDelta][col+colIdxDelta] || 0)
    }
    
   
   return liveNeighborCount; 
}

// var board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// getLiveNeighborCount(0,1,board) // => 1

/** based on current cell value and live neighbor count, return what the next generation value should be */
function getNewBoardValue(cellVal, liveNeighborCount){
    if (cellVal === 1){
        if (liveNeighborCount < 2) {
            return 0;
        } else if (liveNeighborCount > 3) {
            return 0;
        } else {
            return 1;
        }
    } else {
        // if cell val === 0
        if (liveNeighborCount === 3) {
            return 1;
        } else {
            return 0;
        }
    } 
}




