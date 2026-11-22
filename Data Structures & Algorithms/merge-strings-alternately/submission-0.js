class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let maxlen = Math.max(word1.length,word2.length);
        let result = "";
        for(let i =0;i<maxlen;i++)
        {
            result += `${(word1[i] || '')}${(word2[i] || '')}`
        }

        return result;
    }
}
