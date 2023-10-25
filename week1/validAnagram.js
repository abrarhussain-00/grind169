/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // If the lengths of two strings are not equal, they can't be anagrams
    if (s.length !== t.length) {
        return false;
    }
    
    // Create two empty objects to store character counts for each string
    const charCountS = {};
    const charCountT = {};
    
    // Count the occurrences of each character in the first string and store it in charCountS object
    for (let char of s) {
        charCountS[char] = (charCountS[char] || 0) + 1;
    }
    
    // Count the occurrences of each character in the second string and store it in charCountT object
    for (let char of t) {
        charCountT[char] = (charCountT[char] || 0) + 1;
    }
    
    // Compare the character counts in both objects
    // If the counts are equal for each character, the strings are anagrams
    for (let char in charCountS) {
        if (charCountS[char] !== charCountT[char]) {
            return false;
        }
    }
    
    // If all character counts are equal, the strings are anagrams
    return true;
};