// https://leetcode.com/problems/minimum-size-subarray-sum/


var minSubArrayLen = function(target, nums) {
    let beg = 0;
    let minSize = Infinity;
    let sum = 0;
            
    for (let end = 0; end < nums.length; end++){
        sum += nums[end];
       
        while (sum >= target){
            minSize = Math.min(minSize, end-beg+1);
            sum -= nums[beg];
            beg++;
        }
        
    }
    
    return minSize === Infinity ? 0 : minSize;
};

// or written with while

var minSubArrayLen = function(target, nums) {
  let beg = 0;
  let end = 0;
  let minSize = Infinity;
  let sum = nums[0]; // sum including end

  while (end < nums.length){
    if (sum >= target){
      minSize = Math.min(minSize, end-beg+1);
      sum -= nums[beg]
      beg++;
    } else if (sum < target){
      end++;
      sum += nums[end];
    }
  }
    
   return minSize === Infinity ? 0 : minSize;
}
