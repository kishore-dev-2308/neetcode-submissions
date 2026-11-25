class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let seen = new Map();

        let maxcount = 0;
        let res;
        let n = (seen.length / 2);
        for (let i=0;i<nums.length;i++)
        {
            seen.set(nums[i],(seen.get(nums[i]) || 0) +1)
            if(seen.has(nums[i]) && seen.get(nums[i]) > maxcount)
            {
                res = nums[i];
                maxcount = seen.get(nums[i]);
            }

        }
            return res;
    }
}