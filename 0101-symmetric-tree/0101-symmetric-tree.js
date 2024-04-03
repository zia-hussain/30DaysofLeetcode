/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
     if (!root) return true;
    const queue = [root.left, root.right];
    while (queue.length > 0) {
        const leftNode = queue.shift();
        const rightNode = queue.shift();
        if (!leftNode && !rightNode) continue;
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
        queue.push(leftNode.left, rightNode.right);
        queue.push(leftNode.right, rightNode.left);
    }
    return true;
};