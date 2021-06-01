// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]

    let maxSum = nums[0] + nums[1];
    let currentSum = maxSum;
        
    for (let i = 2; i < nums.length; i++){
        currentSum = currentSum + nums[i] - nums[i-1];
        maxSum = Math.max(currentSum, maxSum)
    }
    
    return maxSum;
};
