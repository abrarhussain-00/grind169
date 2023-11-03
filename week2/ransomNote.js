/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    const charCount = {}; // create hashmap to store char count

    // loop over character in magazine first bc you want to see if magazine matches ransomNote
    for (const char of magazine) {
        // set the current char to => if key exists, set to current key + 1, otherwise set to undefined + 1 so that we can move to the next character in object
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Iterate through the ransomNote and check if it can be constructed
    for (const char of ransomNote) {
        // if the current character not in magazine return false. If character count is zero or negative, ransomNote cannot be constructed
        if (!charCount[char] || charCount[char] <= 0) {
            return false;
        }
        charCount[char]--; // not use the same character 
    }
    
    // If all characters in ransomNote are accounted for, it can be constructed
    return true;
}