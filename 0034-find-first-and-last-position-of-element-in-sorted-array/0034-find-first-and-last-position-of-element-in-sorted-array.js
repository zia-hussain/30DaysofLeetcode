/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let startingPosition = -1;
    let endingPosition = -1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            startingPosition = mid;
            endingPosition = mid;
            while (startingPosition > 0 && nums[startingPosition - 1] === target) {
                startingPosition--;
            }
            while (endingPosition < nums.length - 1 && nums[endingPosition + 1] === target) {
                endingPosition++;
            }
            return [startingPosition, endingPosition];
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return [startingPosition, endingPosition];
}