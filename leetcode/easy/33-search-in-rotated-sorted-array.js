// https://leetcode.com/problems/search-in-rotated-sorted-array/

// Ref: https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/273622/Javascript-Simple-O(log-N)-Binary-Search-Solution

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right){
    let mid = Math.floor((left+right)/2);
    
    if (nums[mid] === target) return mid;
    
    // one of the halves is sorted
    
    // check if left half is sorted
    if (nums[left] < nums[mid]){
      if (nums[left] <= target && target <= nums[mid]){
         // target is on left side
        right = mid-1;
        
      } else {
        // target is on right side
        left = mid+1;
      }
      
    // otherwise right half is sorted
    } else {
      if (nums[mid] <= target && target <= nums[right]){
         // target is on right side
        left = mid+1;
      } else {
        // target is on the left side
        right=mid-1;
      }
    } 
  }

  return -1;
}
