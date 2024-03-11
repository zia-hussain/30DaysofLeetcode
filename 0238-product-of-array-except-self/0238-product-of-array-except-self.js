/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;
  const output = Array(n).fill(1);
  let leftProduct = 1, rightProduct = 1;
  for (let i = 0; i < n; i++) {
    output[i] *= leftProduct, leftProduct *= nums[i]}
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct, rightProduct *= nums[i]}
  return output;
  }