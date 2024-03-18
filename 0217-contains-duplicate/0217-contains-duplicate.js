/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numFrequencyMap = new Map();
    for (let num of nums) {
        if (numFrequencyMap.has(num)) {
            return true;
        }
        numFrequencyMap.set(num, 1);
    }
    return false;
}
