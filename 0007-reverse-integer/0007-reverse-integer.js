/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    const maxInt = Math.pow(2, 31) - 1;
    const minInt = -Math.pow(2, 31);
    
    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);
        if (result > Math.floor(maxInt / 10) || (result === Math.floor(maxInt / 10) && digit > 7)) {
            return 0;
        }
        if (result < Math.ceil(minInt / 10) || (result === Math.ceil(minInt / 10) && digit < -8)) {
            return 0;
        }
        result = result * 10 + digit;
    }
    return result;
};