/**
 * @param {number} n
 * @return {number}
 */

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// =============================== BRUTE FORCE ===============================
/**
 * Brute force solution to solve the climbing stairs problem.
 * @param {number} n - Number of stairs to climb
 * @return {number} - Total number of distinct ways to climb the stairs
 */
function climbStairsBruteForce(n) {
    // Base case: If there are 0 or 1 stairs, there is only 1 way to climb
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case: Climb 1 step and make a recursive call for (n-1) stairs
    // or climb 2 steps and make a recursive call for (n-2) stairs
    return climbStairsBruteForce(n - 1) + climbStairsBruteForce(n - 2);
}

// =============================== OPTIMAL APPROACH ===============================

var climbStairs = function(n) {
    let one = 1;
    let two = 1;

    // Iterate from 1 to n - 1
    for (let i = 1; i < n; i++) {
        // Calculate next Fibonacci number by swapping and adding previous two numbers
        const temp = one;
        one = one + two;
        two = temp;
    }

    // Return the final result, which is the number of ways to climb n stairs
    return one;
};
