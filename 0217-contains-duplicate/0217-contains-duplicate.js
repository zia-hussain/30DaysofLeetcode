/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     let sort = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length-1; i++) {
    if (sort[i] == sort[i+1]) {
    return true
    }
  }
     return false
};