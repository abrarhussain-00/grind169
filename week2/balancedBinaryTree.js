/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
Given a binary tree, determine if it is 
height-balanced

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    // create helper function to get height of left & right nodes
    const getHeight = function(node){
        if(node === null){
            return 0
        }

        // declare variable to calc. left && right side height
        const leftSide = getHeight(node.left)
        const rightSide = getHeight(node.right)

        // check if leftSide > 1
        if(leftSide === false){
            return false
        }

        // check if rightSide > 1
        if(rightSide === false){
            return false
        }

        // check height at the current node and calc. its height
        
        // if height > 1: 
        if(Math.abs(leftSide - rightSide) > 1){
            return false
        }

        // if height >= 1. We are adding 1 to account for adding the top node as well along with the left and right side nodes
        return 1 + Math.max(leftSide, rightSide)
    }

    // call helper function to check if root is balanced or not
    return getHeight(root) !== false
};
