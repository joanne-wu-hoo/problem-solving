// Iterative
function binarySearch(nums, target){
    let left = 0;

    let right = nums.length-1;

    while (left <= right){
        let mid = Math.floor((right+left)/2);

        // if the target is the value at mid, return mid
        if (target === nums[mid]) return mid;
        
        // if target > value[mid], go right, left = mid+1;
        if (target > nums[mid]) left = mid+1;
        
        // if target < value[mid], go left, right = mid-1
        if (target < nums[mid]) right = mid-1;
    }
    
    return -1;
}

// Recursive
function binarySearchRecursive(nums, target, left, right){
    // base case -- what's left after you exit the "while loop" (left > right)
    if (left > right) return -1;
    
    // do something
    let mid = Math.floor((right+left)/2);
    if (nums[mid] === target) return mid;
    
    // progress
    if (target > nums[mid]) return binarySearchRecursive(nums, target, mid+1, right);
    if (target < nums[mid]) return binarySearchRecursive(nums, target, left, mid-1);
}
