/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }
    function build(preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }
        const rootVal = preorder[preStart];
        const root = { val: rootVal, left: null, right: null }; // Create a new node
        const rootIndexInorder = indexMap.get(rootVal);
        const leftSubtreeSize = rootIndexInorder - inStart;
        root.left = build(preStart + 1, preStart + leftSubtreeSize, inStart, rootIndexInorder - 1);
        root.right = build(preStart + leftSubtreeSize + 1, preEnd, rootIndexInorder + 1, inEnd);
        return root;
    };
    return build(0, preorder.length - 1, 0, inorder.length - 1);
};
