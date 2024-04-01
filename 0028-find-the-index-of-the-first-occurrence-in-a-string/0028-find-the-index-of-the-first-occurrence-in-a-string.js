/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;
    if (m === 0) return 0;
    const last = new Array(256).fill(-1);
    for (let i = 0; i < m; i++) {
        last[needle.charCodeAt(i)] = i;
    }
    let i = m - 1;
    let j = m - 1;
    while (i < n) {
        if (haystack[i] === needle[j]) {
            if (j === 0) return i;
            i--;
            j--;
        } else {
            i += m - Math.min(j, 1 + last[haystack.charCodeAt(i)]);
            j = m - 1;
        }}
    return -1;
};