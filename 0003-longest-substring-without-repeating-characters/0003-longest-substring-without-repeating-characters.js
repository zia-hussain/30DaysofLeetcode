/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     let maxLen = 0;
    let start = 0;
    const charIndexMap = new Map();
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }
        charIndexMap.set(char, end); 
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
};