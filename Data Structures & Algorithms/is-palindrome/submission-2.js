class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length -1;

        while(l<r)
        {
           if(l <r && !this.alphaNum(s[l]))
           {
            l++;
           }
           else if(r > l && !this.alphaNum(s[r]))
           {
            r--;
           }
           else if(s[l].toLowerCase() !== s[r].toLowerCase()){
            return false;
           }
           else{

           l++;
           r--;
           }
        }
        return true




    }
    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
