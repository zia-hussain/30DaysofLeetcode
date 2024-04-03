/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    const len = s.length;
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < len && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }};
    for (let i = 0; i < len; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }
    return count;
};