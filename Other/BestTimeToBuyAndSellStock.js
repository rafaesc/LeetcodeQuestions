/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxValue = prices[0];
    var minValue = prices[0];
    var maxProfit = 0;

    for (price of prices) {
        if (price > maxValue) {
            maxValue = price;
        }
        if (price < minValue) {
            maxValue = 0;
            minValue = price;
        }
        maxProfit = Math.max(maxValue - minValue, maxProfit)
    }
    return maxProfit

};
//11