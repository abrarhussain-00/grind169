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
 * @return {TreeNode}
 */

/*
Given the root of a binary tree, invert the tree, and return its root.
*/

var invertTree = function (root) {
    // Base case: if the root is null, return null
    if (root === null) {
        return null;
    }

    // Swap the left and right subtrees of the current node
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    // Return the inverted tree
    return root;
};