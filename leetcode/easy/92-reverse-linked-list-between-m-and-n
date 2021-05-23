// https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let pointer = 1;
    let start = head;
    let current = head;
    
    // before reverse section
    while (pointer < left){
        start = current;
        current = current.next
        pointer++;
    }
    
    // at this point pointer = left, this val is going to be the "tail" of the reverse list
    let tail = current;
    let newList = null;
    
    // reverse section
    while (pointer >= left && pointer <= right){
        let next = current.next
        current.next = newList
        newList = current;
        current = next;
        pointer++;
    }
    
    // after reverse section: construct linked list
    start.next = newList
    tail.next = current;
    
    
     if (left > 1){
       return head;
     } else {
     // if left = 1, meaning we reverse from the start of the list, then "head" is no longer the beginning of the list. instead we need to return newList
       return newList;
     }
};
