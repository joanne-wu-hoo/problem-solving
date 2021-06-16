// https://leetcode.com/problems/permutations/

var permute = function(nums) {
    let permutations = [];
    
    function permuteHelper(value, remaining){
        // base case: if remaining array is empty, then we've finished constructing a permutation + want to push into our permutations array
        if (remaining.length === 0) {
            permutations.push(value);
            return;
        }
                
        for (let i = 0; i < remaining.length; i++){         
                // add remaining numbers to value     create new remaining array
            permuteHelper([...value, remaining[i]], [...remaining.slice(0, i), ...remaining.slice(i+1)]);
        }
    }
    
    permuteHelper([], nums);
    
    
    return permutations;
};

// https://leetcode.com/problems/permutations/discuss/610172/Intuitive-JavaScript-Solution-with-DFS
