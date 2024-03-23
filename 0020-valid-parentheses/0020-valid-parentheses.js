/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (char in bracketsMap) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (bracketsMap[top] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};