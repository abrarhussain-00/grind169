/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // declare to var that will start at the same index
    let slow = head;
    let fast = head;
    
    // Iterate through the linked list until fast pointer reaches the end or encounters a cycle
    while (fast !== null && fast.next !== null) {
        // Move slow pointer one step at a time
        slow = slow.next;
        
        // Move fast pointer two steps at a time
        fast = fast.next.next;
        
        // If there is a cycle, slow and fast pointers will meet at some point
        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    
    // If fast pointer reaches the end, there is no cycle in the linked list
    return false; // No cycle found
};