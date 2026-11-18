class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map();

    for(let i=0;i<nums.length;i++)
    {
        count.set(nums[i],(count.get(nums[i]) || 0)+1);
    }

    let a = [...count];
    
    a.sort((a,b)=>b[1] - a[1]);

    return a.slice(0,k).map((p)=>p[0]);
    }
}
