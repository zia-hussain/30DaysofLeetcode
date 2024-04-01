/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const anagramsMap = new Map();
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!anagramsMap.has(sortedStr)) {
            anagramsMap.set(sortedStr, []);
        }
        anagramsMap.get(sortedStr).push(str);
    }
    return Array.from(anagramsMap.values());
};