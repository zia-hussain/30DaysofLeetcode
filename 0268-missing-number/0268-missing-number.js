/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let expSum = (n*(n+1)/2)
    let sum = nums.reduce((acc,cur)=>acc+cur)
    return expSum-sum
};