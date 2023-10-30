/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
*/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1 // first seacrch of the space
        let right = n // end of search space

        while(left < right){
            // The basic idea behind binary search is to repeatedly divide the search interval in half. By comparing the middle element with the target value, you can determine whether the target can be in the left half or the right half of the current search space.
            let middle = Math.floor(left + (right - left)/2) // calc middle value
            if(isBadVersion(middle)){
                right = middle // if the middle version is bad, move the right pointer to mid
            } else {
                left = middle + 1 // if the middle version is good, move the left to mid + 1
            }
        }
        return left // by now left and right pointers meet at the first bad version
    };
};