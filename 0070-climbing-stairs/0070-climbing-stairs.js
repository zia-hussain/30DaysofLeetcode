/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   if (n === 1) return 1;
    let prev1 = 1 ,prev2 = 2
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    return prev2;
};