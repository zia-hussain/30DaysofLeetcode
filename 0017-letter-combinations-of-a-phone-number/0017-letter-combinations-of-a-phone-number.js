/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    const digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    const result = [];
    const backtrack = (index, combination) => {
        if (index === digits.length) {
            result.push(combination);
            return;
        }
        const letters = digitMap[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, combination + letter);
        }
    };
    backtrack(0, '');
    return result;
};