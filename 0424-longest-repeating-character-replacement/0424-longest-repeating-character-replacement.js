/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const charCounts = new Array(26).fill(0);
    let maxCount = 0;
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const charIndex = s.charCodeAt(end) - 65;
        charCounts[charIndex]++;
        maxCount = Math.max(maxCount, charCounts[charIndex]);

        while (end - start + 1 - maxCount > k) {
            const startCharIndex = s.charCodeAt(start) - 65;
            charCounts[startCharIndex]--;
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};