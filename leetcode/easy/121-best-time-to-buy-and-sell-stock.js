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

var getBuyPrices = (prices) => {
  let lowest = prices[0];

  let buyPrices = [lowest];

  for (let price of prices){
    lowest = Math.min(price,lowest)
    buyPrices.push(lowest)
  }

  return buyPrices;
}

var buyAndSellStock = (prices) => {
  if (prices.length <= 1) return 0;

  const buyPrices = getBuyPrices(prices);

  let maxProfit = 0;

  for (let i=0; i < prices.length; i++){
    let profit = prices[i] - buyPrices[i]
    maxProfit = Math.max(profit, maxProfit)
  }

  return maxProfit;
}
