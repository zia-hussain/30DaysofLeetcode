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
    if (nums[i] < 0) {
      let temp = maxProductSoFar;
      maxProductSoFar = minProductSoFar;
      minProductSoFar = temp;
    }

    maxProductSoFar = Math.max(nums[i], maxProductSoFar * nums[i]);
    minProductSoFar = Math.min(nums[i], minProductSoFar * nums[i]);

    result = Math.max(result, maxProductSoFar);
  }

  return result;
};