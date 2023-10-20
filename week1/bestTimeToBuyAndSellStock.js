/**
 * @param {number[]} prices
 * @return {number}
 */

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/


const prices1 = [7,1,5,3,6,4]
const prices2 = [7,6,4,3,1]

var maxProfit = function(prices) {
    let maxProfit = 0 // set maxProfit = 0
    let minPrice = prices[0] // set minPrice to first index

    for(i = 0; i < prices.length; i++){
        potentialProfit = prices[i] - minPrice // potentialProfit = current index - minPrice

        // if potentialProfit > maxProfit
        if(potentialProfit > maxProfit){
            maxProfit = potentialProfit
        }

        // if current index < minPrice
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }
    }
    return maxProfit
}
console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
