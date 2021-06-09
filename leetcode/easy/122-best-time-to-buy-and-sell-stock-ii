// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var getProfits = (sellPrices) => {
    let buyPrice = sellPrices[0];
    
    let profits = [];
    
    for (let sellPrice of sellPrices){
        profits.push(sellPrice - buyPrice);
        buyPrice = sellPrice;
    }
    
    return profits;
}


var maxProfit = function(prices) {
    let profits = getProfits(prices);
    // console.log({profits})
    let total = 0;
    
    for (let profit of profits) {
        if (profit > 0) {
            total += profit;
        }  
    }
    
    return total;
};

/* 
1. create an array representing the price if you were to sell the previous day
2. sum up the positive values

*/
