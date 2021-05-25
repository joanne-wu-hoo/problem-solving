// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    
    let lowestPrice = prices[0];
    let bestProfit = 0;
    let profitSellingAtCurrIdx;
    
    for (let i=0; i < prices.length; i++){
        profitSellingAtCurrIdx = prices[i] - lowestPrice;
        lowestPrice = Math.min(lowestPrice, prices[i]);
        bestProfit = Math.max(profitSellingAtCurrIdx, bestProfit)
    }
    
    return bestProfit;
};

// another way


var getSellPrices = (nums) => {
    let sellPrices = new Array(nums.length);
    let max = nums[nums.length-1];
    
    sellPrices[nums.length-1] = max;
    
    for (let i = nums.length-2; i >= 0; i--){
        max = Math.max(max, nums[i+1]);
        sellPrices[i] = max;
    }
    
    return sellPrices;
}

var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    const sellPrices = getSellPrices(prices);

    // calculate profits
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++){
        let profit = sellPrices[i] - prices[i];
        maxProfit = Math.max(profit, maxProfit);
    }
    
    return maxProfit;
};
