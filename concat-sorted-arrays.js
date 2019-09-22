// Time complexity: O(n+m), where n is the length of the first array, and m is the length of the second
// Space complexity: O(n+m)

/* Given two sorted arrays, return a new sorted array that contains 
all the values from both arrays without mutating the input arrays */

function concatSortedArrays(nums1, nums2){
  let i = 0; // nums1 pointer
  let j = 0; // nums2 pointer
  let sorted = [];

  while (i < nums1.length && j < nums2.length){
    if (nums1[i] <= nums2[j]){
      sorted.push(nums1[i]);
      i++;
    } else if (nums1[i] > nums2[j]){
      sorted.push(nums2[j]);
      j++;      
    }
  }

  // if we have not depleted nums1, add the remaining values
  if (i <= nums1.length-1){
    for (let k = i; k < nums1.length; i++){
      sorted.push(nums1[k]);
    }
  }
  // if we have not depleted nums2, add the remaining values
  if (j <= nums2.length-1){
    for (let k = j; k < nums2.length; k++){
      sorted.push(nums2[k]);
    }
  } 

  return sorted;
}

console.log(concatSortedArrays([1, 3, 4, 5], [2, 4, 6, 8])) // [1, 2, 3, 4, 4, 5, 6, 8]);
console.log(concatSortedArrays([1, 10], [5, 7, 9])) // [1, 5, 7, 9, 10]);
console.log(concatSortedArrays([5, 7, 9], [1, 10])) // [1, 5, 7, 9, 10]);
