/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (!nums || nums.length === 0) return 0;
  
    let maxProductSoFar = nums[0];
    let minProductSoFar = nums[0];
    let result = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        const tempMax = maxProductSoFar * current;
        const tempMin = minProductSoFar * current;
  
        maxProductSoFar = Math.max(current, tempMax, tempMin);
        minProductSoFar = Math.min(current, tempMax, tempMin);
  
        result = Math.max(result, maxProductSoFar);
    }
  
    return result;
};