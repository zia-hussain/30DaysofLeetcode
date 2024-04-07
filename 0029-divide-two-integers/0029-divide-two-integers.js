/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    if (dividend === -2147483648 && divisor === 1) return -2147483648;

    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = Math.pow(-2, 31);

    const isPositive = (dividend > 0) === (divisor > 0);
    let absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);

    let quotient = 0;

    for (let i = 31; i >= 0; i--) {
        if ((absDividend >>> i) >= absDivisor) {
            quotient += 1 << i;
            absDividend -= absDivisor << i;
        }
    }

    if (!isPositive && quotient === Math.pow(2, 31)) return MIN_INT;
    return isPositive ? quotient : -quotient;
}
