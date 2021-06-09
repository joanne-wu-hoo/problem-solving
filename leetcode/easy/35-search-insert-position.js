// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length-1]) return nums.length;
    
    // binary search
    let left = 0;
    let right = nums.length-1;
    
    // find the target
    while (left <= right){
        let mid = Math.floor((right+left)/2);
        
        if (nums[mid] === target){
            return mid;
        }
        
        if (target < nums[mid]){
            // go left
            right = mid - 1;
        } else if (target > nums[mid]){
            // go right
            left = mid + 1;
        }
    }
    
    
    // if we haven't found the target, then we should insert at the left index
    return left;    
};
