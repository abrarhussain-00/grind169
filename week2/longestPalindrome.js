/**
 * @param {string} s
 * @return {number}
 */

/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/

class Solution {
    longestPalindrome(s) {
    // Initialize a variable to store the length of the longest palindrome
    let ans = 0;
    // Create an object to store the frequency of each character in the input string
    let keys = {};

    // Iterate through each character in the input string
    for (let char of s) {
        // Update the frequency of the current character in the 'keys' object
        keys[char] = (keys[char] || 0) + 1;
        // If the frequency of the current character becomes even, it can be part of the palindrome.
        // Increment the answer by 2.
        if (keys[char] % 2 == 0) {
            ans += 2;
        }
    }
    // If the length of the input string is greater than the calculated answer,
    // there are characters with odd counts that can be used in the middle of the palindrome.
    // Add 1 to the answer.
    return s.length > ans ? ans + 1 : ans;
    }
}

/*
1. let ans = 0;: This variable ans is used to store the length of the longest palindrome. It is initialized to 0 and will be updated as the function iterates through the input string.

2. let keys = {};: This object keys is used to store the frequency of characters in the input string. Each key represents a character, and the corresponding value represents its frequency.

3. for (let char of s) { ... }: This for loop iterates through each character char in the input string s.

4. keys[char] = (keys[char] || 0) + 1;: For the current character char, this line updates its frequency in the keys object. If the character is not already a key in the object, it initializes the frequency to 1. If it is already a key, it increments the existing frequency by 1.

5. if (keys[char] % 2 == 0) { ans += 2; }: If the frequency of the current character becomes even (indicating that it can be part of a palindrome), the ans variable is incremented by 2.

6. return s.length > ans ? ans + 1 : ans;: Finally, the function checks if the length of the input string is greater than the calculated ans. If it is, it means there are characters with odd counts that can be placed in the middle of the palindrome. In this case, 1 is added to ans before returning the result. Otherwise, the function returns ans.
*/

// Example usage
const inputString = "abccccdd";
const result = longestPalindrome(inputString);
console.log("Longest palindrome length:", result);
