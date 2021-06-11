class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
var linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

function printList(head) {
  if(!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
}


function reverseLinkedList(head){
  let current = head;
  let reversedList = null;

  while (current){
    let next = current.next;
    current.next = reversedList;
    reversedList = current;
    current = next;
  }

  return reversedList;
}

printList(linkedList);
console.log("after reverse:")
console.log(printList(reverseLinkedList(linkedList)))
