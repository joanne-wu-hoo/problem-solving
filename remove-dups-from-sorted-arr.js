// source: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Given nums = [1,1,2],
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the returned length.

// Example 2:
// Given nums = [0,0,1,1,1,2,2,3,3,4],
// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
// It doesn't matter what values are set beyond the returned length.

// [1,1,2]

// ex. [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = 

function removeDuplicates(nums) {
  let i = 0;
  let j = 1;

  function compare(nums){
    // console.log(`val at i (${i}) is ${nums[i]}; val at j (${j}) is ${nums[j]}; nums is ${nums}`)

    if (i > nums.length || j > nums.length) return;

    if (nums[i] === nums[j]) {
      // console.log("i === j")
      // if we have two duplicates next to eachother, j++
      j++;
      // console.log("j++");
      compare(nums);
    }

    if (nums[i] !== nums[j]) {
      // console.log("i !== j")
      if (j-i !== 1) {
        // console.log("and i is NOT next to j")
        // and they're not next to eachother
        // we've skipped some duplicates, let's remove them
        nums.splice(i, j-i-1); 
        i = (j-i-1); 
        j = i+1;
        compare(nums);
      }
      // console.log("and i IS next to j")
      // otherwise, we just have two non duplicate numbers next to eachother
      // increment both counters
      i++;
      j++;
      compare(nums);
    }
  }

  compare(nums);

  return nums.length;
};

/** Approach
 * - 2 pointers, i=0, j=1
 * - compare arr[i] and arr[j]
 *  - if they're the SAME, j++
 *    - compare again until arr[i] != arr[j], then
 *      arr.splice(i, j-i), mutating arr
 *      i=0; j=1
 *  - if they're not the same, i++, j++
 */