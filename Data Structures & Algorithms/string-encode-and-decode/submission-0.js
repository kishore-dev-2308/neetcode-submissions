class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for(let i =0; i<strs.length; i ++)
        {
            let length = strs[i].length;

            result += `${length}#${strs[i]}`;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        if(str.length === 0)
        {
            return [];
        }

        let result = [];
        let currentNumber = "";
        for(let i =0; i<str.length; i ++){
            if(str[i] !== "#")
            {
                currentNumber = `${currentNumber}${str[i]}`;
            }
            else{
                currentNumber = Number(currentNumber);
                let start = i +1;
                let end = start + currentNumber;
    
                let strResult = str.slice(start,end);

                result.push(strResult);
                i=end -1;
                currentNumber = "";
                
            }
        }

        return result;

    }
}