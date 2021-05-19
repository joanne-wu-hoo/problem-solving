// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDupInPlace(nums){
  if (nums.length < 2) return nums.length;

  let seen = new Set([nums[0]]);
  let insertIdx = 1;

  for (let i=1; i<nums.length; i++){
    if (!seen.has(nums[i])){
      seen.add(nums[i]);
      nums[insertIdx] = nums[i];
      insertIdx++;
    }
  }

  nums.splice(insertIdx);
  return nums.length;
}

removeDupInPlace([0,0,1,1,1,2,2,3,3,4]); // 5


// Using less space
function removeDuplicates(nums) {
    if (nums.length <= 1){
        return nums.length;
    };
    
    let prevVal = nums[0];
    let validNumLength = 1;
    
    for (let i = 1; i < nums.length; i++){
        let currentVal = nums[i];
        
        if (currentVal !== prevVal){
            // found a new valid number
            validNumLength++;
            prevVal = nums[i];
            // move valid number to end of valid number section
            [nums[validNumLength-1]] = [nums[i]];
        }
    }
    
    
    return validNumLength;
}

