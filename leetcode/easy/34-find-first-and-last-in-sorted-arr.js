// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

var searchRange = function(nums, target) {
    let firstIdx = findFirst(nums, target);
    let lastIdx = findLast(nums, target);
    
    return [firstIdx, lastIdx];
};

/** return idx OR -1 */
function findFirst(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] === target && (mid === 0 || nums[mid - 1] !== target)) {
      return mid;
    } else if (nums[mid] >= target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    }
  }
    
  return -1;
}


/** return idx OR -1 */
function findLast(nums, target){
  let low = 0;
  let high = nums.length-1;

  while (low <= high){
    let mid = Math.floor((high+low)/2);

    if (nums[mid] === target && (mid === nums.length-1 || nums[mid+1] !== target)){
      return mid;
    } else if (nums[mid] > target){
      // move left
      high = mid-1;
    } else if (nums[mid] <= target){
      // move right
      low = mid+1;
    }
  }

  return -1;
}
