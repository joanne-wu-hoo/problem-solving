// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

var removeDuplicates = function(nums) {
    let insertIdx = 0;
    let seenMap = new Map();
    
    for (let i = 0; i < nums.length; i++){
        let currentVal = nums[i]
        seenMap[currentVal] = (seenMap[currentVal] || 0) + 1;
        
        if (seenMap[currentVal] <= 2){
            nums[insertIdx] = currentVal;
            insertIdx++;
        }
    }
    
    nums.length = insertIdx;
    
    return nums.length;
};

// TODO: do this without creating a map bc we really only need to keep a counter
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/discuss/501616/JavaScript-Solution
