// https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function(matrix) {
    let zeroRowIdxs = new Set();
    let zeroColIdxs = new Set();
    
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++){
        for (let colIdx = 0; colIdx < matrix[0].length; colIdx++){
            if (matrix[rowIdx][colIdx] === 0){
                zeroRowIdxs.add(rowIdx);
                zeroColIdxs.add(colIdx);
            }
        }
    }
    
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++){
        for (let colIdx = 0; colIdx < matrix[0].length; colIdx++){
            if (zeroRowIdxs.has(rowIdx) || zeroColIdxs.has(colIdx)){
               matrix[rowIdx][colIdx] = 0;
            }
        }
    }
    
    return matrix;
    
};


/* Approach
let zeroRowIdxs = new Set()
let zeroColIdxs = new Set();

1. go through and find the 0's
store the zero row idxs in a set
store the zero col idxs in a set

2. go through again, if zeroRowIdxs.has(rowIdx) || zeroRowCol.has(colIdx) then replace with o
*/
