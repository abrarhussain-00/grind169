/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

*/
        // L          R
// nums = [-1,0,3,5,9,12], 
//      M = 0
// target = 9
var search = function(nums, target) {
    let left = 0; // Initialize left pointer to the first index of the array.
    let right = nums.length - 1; // Initialize right pointer to the last index of the array.

    while(left <= right) { // Continue the loop until the left pointer is less than or equal to the right pointer.
        let middle = left + Math.floor((right - left) / 2); // Calculate the middle index of the current search space.

        if(nums[middle] === target) { // If the middle element is equal to the target, return its index.
            return middle;
        } else if (nums[middle] < target) { // If the middle element is less than the target, adjust the left pointer.
            left = middle + 1;
        } else { // If the middle element is greater than the target, adjust the right pointer.
            right = middle - 1;
        }
    }

    return -1; // If the target is not found in the array, return -1 to indicate absence.
};
