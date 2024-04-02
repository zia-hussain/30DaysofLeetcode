/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length === 0) return "";
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    };
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        const palindrome1 = expandAroundCenter(i, i);
        const palindrome2 = expandAroundCenter(i, i + 1);
        if (palindrome1.length > longest.length) {
            longest = palindrome1;
        }
        if (palindrome2.length > longest.length) {
            longest = palindrome2;
        }
    }
    return longest;
};