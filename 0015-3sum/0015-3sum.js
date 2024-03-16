/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let low = i + 1, high = nums.length - 1;
            const target = -nums[i];
            
            while (low < high) {
                const sum = nums[low] + nums[high];
                
                if (sum === target) {
                    result.push([nums[i], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    while (low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if (sum < target) {
                    low++;
                } else {
                    high--;
                }
            }
        }
    }
    
    return result;

};