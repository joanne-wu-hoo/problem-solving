// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums){
  let sum = nums[0];
  let maxSum = nums[0];

  for (let right = 1; right < nums.length; right++){
    // is the sum larger if we add the right value OR if we start at the right value?
    if (nums[right] > sum + nums[right]){
      // if sum is larger if we start at the right value, set sum as nums[right]
      sum = nums[right];
    } else {
      // else if sum is larger with the right value, set sum as sum += nums[right]
      sum += nums[right];
    }
    
    maxSum = Math.max(maxSum, sum)
  }

  return maxSum;
}

// The above can be refactored into
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentMaxSum = nums[0];
    
    for (let i = 1; i < nums.length; i ++){
        currentMaxSum = Math.max(nums[i], nums[i] + currentMaxSum);
        maxSum = Math.max(currentMaxSum, maxSum);
    }
    
    return maxSum;
};
