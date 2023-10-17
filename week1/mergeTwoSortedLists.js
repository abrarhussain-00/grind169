/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
*/

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummyHead = new ListNode(0) // create a dummy head node to simplify the code
    let current = dummyHead // points to the current node in the list

    // traverse through both lists and compare nodes
    while(list1 !== null && list2 !== null){
        // if list1 value is smaller add to merge list
        if(list1.val() < list2.val()){
            current.next = list1 // make current = the current list
            list1 = list1.next // move on to the next value in the node
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next // make current.next = current --> Move the current pointer to the newly added node
    }

    // If any list is left, append it to the merged list
    if(list1 !== null){
        current.next = list1
    } else {
        current.next = list2
    }
    // The merged list starts from the next of the dummy head
    return dummyHead.next
};