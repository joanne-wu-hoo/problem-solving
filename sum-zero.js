// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.

// Return an array that includes both values that sum to zero
// or undefined if a pair does not exist.


function sumZero(nums){
  let left = 0;
  let right = nums.length-1;
  let sum;

  while (right > left) {
    sum = nums[left] + nums[right];

    if (sum > 0) {
      right--;
    }

    if (sum < 0) {
      left++;
    }

    if (sum === 0) {
      return [nums[left], nums[right]];
    }
  }

}

// sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
// sumZero([-2, 0, 1, 3]); // undefined
// sumZero([1, 2, 3]); // undefined

/** Approach
 * 1. multipointers 
 *  - left = 0
 *  - right = nums.length-1
 * 2. sum = left + right
 *  - if sum > 0 (too positive, so right--)
 *  - if sum < 0 (too negative, so left++)
 *  - if sum = 0, return [left, right]
 * 3. continue while right > left
 */