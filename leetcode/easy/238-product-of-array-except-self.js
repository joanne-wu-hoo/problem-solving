// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function(nums) {
    let prodOfValsToLeft = [1];
    let prod = 1;
    for (let i = 0; i < nums.length-1; i++){
        prod = prod * nums[i];
        prodOfValsToLeft.push(prod);
    }
        
    let prodOfValsToRight = [1];
    prod = 1;
    for (let i = nums.length-1; i > 0; i--){
        prod = prod * nums[i];
        prodOfValsToRight.unshift(prod);
    }
    
    let products = [];
    for (let i = 0; i < nums.length; i++){
        products.push(prodOfValsToLeft[i] * prodOfValsToRight[i]);
    }
    
    return products;
};


// https://leetcode.com/problems/product-of-array-except-self/discuss/694266/Javascript-Solution-(No-Division)-(With-Explanation)
