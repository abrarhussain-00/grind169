/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Initialize the stack and define matching pairs:
    const stack = [];
    const parenthesesCheck = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    // iterate through each character of the input "s" (string)
    for (let character of s) {
        // if the character is a closing symbol
        if (parenthesesCheck[character]) {
            // pops top element of the stack
            if (stack.pop() !== parenthesesCheck[character]) {
                return false;
            }
            // if the character is an opening symbol -> push into stack
        } else {
            stack.push(character);
        }
    }
    // if the stack is empty return true bc all opening symbols have valid closing pairs
    return stack.length === 0;
}

console.log(isValid("()[]{}")); // Output: true (valid)
console.log(isValid("([)]"));   // Output: false (invalid)