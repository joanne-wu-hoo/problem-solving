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

// Image explanining approach
// https://user-images.githubusercontent.com/9150788/76787122-523f3300-67b0-11ea-8817-e70df9d99987.png


// recursive way
var subsets = function(nums) {
    let result = [];
    dfs([], 0);
    
    function dfs(current, index){
        result.push(current);
        for(let i = index; i < nums.length; i++) {
            dfs(current.concat(nums[i]), i + 1);
        }
    }
    
    return result;
};
