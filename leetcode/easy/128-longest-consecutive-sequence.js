// https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function(nums){
    let numsSet = new Set(nums);
    let maxLength = 0;
    
    for (let num of numsSet){
        // if we're at the start of a sequence
        if (!numsSet.has(num-1)){
            let currentCount = 1;
            let currentVal = num;
            // keep checking is numsSet contains values in the sequence
            while (numsSet.has(currentVal+1)){
                currentCount++;
                currentVal+=1;
            }
            maxLength = Math.max(maxLength, currentCount);
        }
    }
    
    return maxLength;
}
