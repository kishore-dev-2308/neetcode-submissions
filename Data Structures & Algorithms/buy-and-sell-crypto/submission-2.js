class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let profit = 0;
        while(r < prices.length)
        {
            if(prices[r] > prices[l]){
                let p = prices[r] - prices[l];
                profit = Math.max(profit,p);
            }
            else{
                l=r;
            }
            r++;
        }

        return profit;
    }
}

let a = new Solution();

console.log(a.maxProfit([5,1,5,6,7,1,10]));
