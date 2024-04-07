/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    const generate = (leftCount, rightCount, current) => {
        if (leftCount === n && rightCount === n) {
            result.push(current);
            return;
        }
        if (leftCount < n) {
            generate(leftCount + 1, rightCount, current + '(');
        }
        if (rightCount < leftCount) {
            generate(leftCount, rightCount + 1, current + ')');
        }
    };
    generate(0, 0, '');
    return result;
};