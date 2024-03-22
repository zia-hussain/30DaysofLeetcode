/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
       return n < 1 ? 0
        : n <= 2 ? 1
        : fib(n - 1) + fib(n - 2)

};