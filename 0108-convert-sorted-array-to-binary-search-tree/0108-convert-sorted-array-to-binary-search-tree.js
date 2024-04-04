/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
   const buildBST = (start, end) => {
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const node = { val: nums[mid], left: null, right: null };
        node.left = buildBST(start, mid - 1);
        node.right = buildBST(mid + 1, end);
        return node;
    };
    return buildBST(0, nums.length - 1);
}