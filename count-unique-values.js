// Implement a function, countUniqueValues, which accepts a sorted array, 
// and counts unique values in array.

// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(nums) {
  let i = 0;
  let j = 1;

  let count = 1;

  while (j < nums.length){
    if (nums[i] !== nums[j]){
      count++;
    }
  
    i++;
    j++;
  }

  return count;
}

// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4

/** Approach
 * handle empty array
 * initialize count=1
 * 
 * 1. multi-pointer, i=0, j=1
 * 2. compare val at i & j
 * - if i != j => count++
 * - always i++, j++
 * 3. continue while j <= nums.length-1
 */
