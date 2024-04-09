/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    
    // Discard leading whitespace
    while (s[i] === ' ') {
        i++;
    }
    
    // Determine sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Convert digits to integer
    while (i < s.length && !isNaN(parseInt(s[i]))) {
        const digit = parseInt(s[i]);
        // Check for overflow
        if (result > Math.floor((Math.pow(2, 31) - digit) / 10)) {
            return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
        }
        result = result * 10 + digit;
        i++;
    }
    return Math.min(Math.max(result * sign, -Math.pow(2, 31)), Math.pow(2, 31) - 1);
};