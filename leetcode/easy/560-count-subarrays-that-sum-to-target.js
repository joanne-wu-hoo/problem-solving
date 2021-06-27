// https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function(nums, k) {
    nums = nums.sort((a,b) => a-b);
    
    let count = 0;
    let sum = nums[0];
    let left = 0;
    let right = 0;

    // sum is inclusive of left and right
    
    while (right < nums.length){
        // if sum === k, count++, left++ (sum - val[left])
        if (sum === k){
            count++;
            sum = sum - nums[left];
            left++;
        } else if (sum < k){
            right++;
            sum = sum + nums[right];
        } else { // sum > k
            sum = sum - nums[left];
            left++;
        }
        
    }

    return count;
};
