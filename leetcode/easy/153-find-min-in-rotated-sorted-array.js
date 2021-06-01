// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// First attempt
// Time: O(logn)
// Space: O(1)

var findMin = function(nums) {
  if (nums.length === 1) return nums[0]

  let left = 0;
  let right = nums.length - 1;

  while (left < right){
      let mid = Math.floor((left+right)/2);

      // if the array is sorted, then return the first value
      if (nums[left] < nums[right]) return nums[left];

      if (nums[left] <= nums[mid]) {
          // go right
          left = mid + 1;
      } else if (nums[left] >= nums[mid]){
          // go left
          right = mid;
      }
  }

  return nums[left]
};


// Cleaner
function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;
  
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) l = m+1;
    else r = m;
  }
  return nums[l];
}
