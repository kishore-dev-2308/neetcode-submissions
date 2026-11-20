class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let values = new Set(nums);
        let maxcount = 0;
        for(let i=0;i<nums.length;i++)
        {
            let start = nums[i];
            if(!values.has(start - 1)){
               let current = start;
               let count = 1;

               while(values.has(current + 1))
               {
                current ++;
                count ++;
               }

               maxcount = Math.max(maxcount,count);
            }
        }

        return maxcount;
    }
}
