// https://leetcode.com/problems/reverse-linked-list-ii/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
var linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// ---- Generate our linked list ----

function printList(head) {
  if(!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
}

// ------ Reverse between m and n ------

function reverseBetween(head,left,right){
  let pointer = 1;
  let start = head;
  let current = head;

  // 1. before left: just go thru list advancing pointer, start, and current
  while (pointer < left){
    start = current;
    current = current.next;
    pointer++
  };

  // at this point:
  // - pointer = left
  // - start => left-1
  // - current => left
 
  // 2. between left and right: reverse
  
  // note: at this point current => left, which will eventually be the tail of the reversed section.
  // we need to connect the tail of the reversed section to the remaining list, so let's store it
  let tail = current;

  let reversedList = null;
  while (pointer >= left && pointer <= right){
    let next = current.next;
    current.next = reversedList;
    reversedList = current;
    current = next;
    pointer++;
  }

  // at this point:
  // - pointer = right
  // - start => left-1
  // - current => right+1
  // - tail => left (end of reversed list)
  // - reversedList = nodes from left to right reversed

  // 3. after right: construct
  start.next = reversedList;
  tail.next = current;

  // if left = 1, meaning we reverse from the start of the list
  // then "head" is no longer the beginning of the list and we need to return newList instead
  if (left === 1){
    return newList;
  } else {
    return start;
  }
}

printList(linkedList);
console.log('after reverse');
printList(reverseBetween(linkedList, 2, 4));



