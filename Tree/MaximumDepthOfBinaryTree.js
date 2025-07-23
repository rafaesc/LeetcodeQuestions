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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    return recursion(root, 1)
};

var recursion = function (root, deep) {
    var output = deep;
    var maxLeft = deep, maxRight = deep;

    if (root.left) {
        maxLeft = recursion(root.left, deep + 1);
    }
    if (root.right) {
        maxRight = recursion(root.right, deep + 1);
    }

    return Math.max(output, maxLeft, maxRight);
}
