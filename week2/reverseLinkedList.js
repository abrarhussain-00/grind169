// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Initialize pointers for previous, current, and next nodes
    let prev = null; // Previous node starts as null
    let curr = head; // Current node starts at the head of the list

    // Traverse the list
    while (curr) {
        // Save the reference to the next node
        let next = curr.next;
        
        // Reverse the link - point current node's next to the previous node
        curr.next = prev;

        // Move previous and current pointers one step forward
        prev = curr;
        curr = next;
    }

    // When the loop ends, prev will be the new head of the reversed list
    return prev;
}

// Example usage
const solutionInstance = new Solution();
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

// Call the reverseList function and get the reversed list head
const reversedHead = solutionInstance.reverseList(head);
