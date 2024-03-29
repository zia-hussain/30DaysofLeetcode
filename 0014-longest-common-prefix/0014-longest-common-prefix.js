/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     if (strs.length === 0) return "";
  return strs.reduce((prefix, str) => {
        let i = 0;
        while (i < prefix.length && i < str.length && prefix[i] === str[i]) {
            i++;
        }
        return prefix.slice(0, i);
    }, strs[0]);
};