// https://leetcode.com/problems/two-sum/

// Brute force
const twoSum = function(nums, target) {
    let p1 = 0;
    let p2 = 1;
    
    while (p1 < nums.length){
        while (p2 < nums.length){
            let numToFind = target - nums[p1];
            if (nums[p2] === numToFind){
                return [p1, p2]
            }
            p2++;       
        }
     p1++;
     p2 = p1+1;
    }
};

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
