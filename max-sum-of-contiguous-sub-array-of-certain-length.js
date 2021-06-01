// Write a function called maxSubarraySum, which accepts an array of integers and a number representing the length of a subarray.

// The function should return the largest sum of a contiguous subarray with the given length.

// Note that a subarray must consist of consecutive elements from the original array.

maxSubarraySum([100, 200, 300, 400], 2); // 700

maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39

maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5

maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5

maxSubarraySum([2, 3], 3); // null


// Naive O(N^2)
function maxSubarraySum(arr, k) {
  let maxSum = 0;

  for (let i = 0; i <= arr.length - k; i++) {
    // sum every k elements starting from current i
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    // is this the largest slice so far?
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

// Optimized with Sliding Window O(N)

function maxSubarrSum(arr, k) {
  let maxSum = 0;

  // get the sum of the first three numbers to start
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  let currentSum = maxSum;

  // starting after the first sum, compute the rest
  for (let i = k; i < arr.length; i++) {
    // current window adds new element and chops off left
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
