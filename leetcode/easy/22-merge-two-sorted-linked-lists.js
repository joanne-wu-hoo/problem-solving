// https://leetcode.com/problems/merge-two-sorted-lists/


var mergeTwoLists = (l1, l2) => {
  let newList = new ListNode();
  let head = newList;
  
  while (l1 && l2){
    newList.next = new ListNode();
    if (l1.val <= l2.val){
      newList.next.val = l1.val;
      l1 = l1.next;   
    } else {
      newList.next.val = l2.val;
      l2 = l2.next; 
    }
    newList = newList.next
  }
  
  if (l1 === null){
    newList.next = l2;
  } 
  
  if (l2 === null){
    newList.next = l1;
  }
  
  return head.next;
}
