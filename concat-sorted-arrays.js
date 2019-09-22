// Time complexity: O(n+m), where n is the length of the first array, and m is the length of the second
// Space complexity: O(n+m)

/* Given two sorted arrays, return a new sorted array that contains 
all the values from both arrays without mutating the input arrays */

function concatSortedArrays(nums1, nums2){
  let i = 0; // nums1 pointer
  let j = 0; // nums2 pointer
  let result = [];

  while (i < nums1.length && j < nums2.length){
    if (nums1[i] <= nums2[j]){
      result.push(nums1[i]);
      i++;
    } else if (nums1[i] > nums2[j]){
      result.push(nums2[j]);
      j++;      
    }
  }

  // if arr1 was longer, push the rest of arr1
  while (i < nums1.length) {
    result.push(nums1[i]);
    i++;
  }

  // if arr2 was longer, push the rest of arr2
  while (j < nums2.length) {
    result.push(nums2[j]);
    j++;
  }

  return result;
}

console.log(concatSortedArrays([1, 3, 4, 5], [2, 4, 6, 8])) // [1, 2, 3, 4, 4, 5, 6, 8]);
console.log(concatSortedArrays([1, 10], [5, 7, 9])) // [1, 5, 7, 9, 10]);
console.log(concatSortedArrays([5, 7, 9], [1, 10])) // [1, 5, 7, 9, 10]);
