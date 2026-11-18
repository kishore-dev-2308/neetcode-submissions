class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let converted = new Map();

    for(let i=0;i<strs.length;i++)
    {
        let srt = strs[i].split("").sort().join("");

        converted.set(srt, converted.has(srt) ? [...converted.get(srt),strs[i]] : [strs[i]]);
    }

    return [...converted].map((p)=>p[1]);
    }
}
