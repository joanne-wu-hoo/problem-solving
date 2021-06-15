// https://leetcode.com/problems/subsets/

function subsets(nums){
    let output = [[]];
    
    for (let i = 0; i < nums.length; i++){
        let newEntries = []
        
        for (let entry of output){
            newEntries.push(entry.concat(nums[i]));
        }
        
        output.push(...newEntries);
    }
    
    return output;
}


