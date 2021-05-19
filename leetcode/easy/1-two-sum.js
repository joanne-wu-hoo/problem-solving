// https://leetcode.com/problems/two-sum/

// Brute force
const twoSum = function(nums, target){    
    for (let i = 0; i < nums.length; i++){
        let currentVal = nums[i];
        let ntf = target - currentVal;
        for (let j = i+1; j < nums.length; j++){
            if (nums[j] === ntf){
                return [i,j]
            }
        }
    }
    return null;
}

// Optimized
const twoSum = function(nums, target){
   let numsToFindSet = new Set() 
   let numToFindTracker = {}; // keys will be value of number to find, values will be the index of the number that generated the number to find
    
   for (let p = 0; p < nums.length; p++){
      let currentVal = nums[p];
      let ntf = target - currentVal;

      if (numsToFindSet.has(currentVal)){
        return [p, numToFindTracker[currentVal]]   
       }

      numsToFindSet.add(ntf)
      numToFindTracker[ntf] = p;
   }
    
   return null;
}
