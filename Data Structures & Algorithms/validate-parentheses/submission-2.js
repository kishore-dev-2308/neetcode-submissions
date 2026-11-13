class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isValid(s) {
        let p = {
            ")":"(",
            "]":"[",
            "}":"{"
        }
        let stack = [];

        for( let c of s)
        {
            if(p[c]){
                if(stack.pop() !== p[c])
                {
                    return false;
                }
            }
            else{
                stack.push(c);
            }
        }

        return stack.length === 0;
    }

    
}
