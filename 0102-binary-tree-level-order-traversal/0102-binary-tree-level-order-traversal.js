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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root)
    return [];
    
  const ans = [];
  const q = [root];

  while (q.length > 0) {
    const currLevel = [];
    const levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      const node = q.shift();
      currLevel.push(node.val);
      if (node.left)
        q.push(node.left);
      if (node.right)
        q.push(node.right);
    }
    ans.push(currLevel);
  }
  return ans;
};