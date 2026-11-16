class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let seen = new Map();

        for(let i=0; i < numbers.length;i++)
        {
            let remining = target - numbers[i];

            if(seen.has(remining)){
                return [seen.get(remining) + 1,i + 1];
            }

            seen.set(numbers[i],i);
        }
    }
}
