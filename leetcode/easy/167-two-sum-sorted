// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// sorted input
// return ouput assuming 1-indexed

const twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    
    while (left < right){
        let sum = numbers[left] + numbers[right];
        if (sum === target) return [left+1, right+1];
        if (sum > target) right--;
        if (sum < target) left++;
    }
};
