// https://leetcode.com/problems/merge-two-sorted-lists/

// https://leetcode.com/problems/merge-two-sorted-lists/discuss/341711/Clean-Javascript

function mergeTwoLists(l1, l2){
  if (!l1 && !l2) return [];

  let list = new ListNode();
  let head = list;

  while (l1 && l2){
    if (l1.val <= l2.val){
      // l1 is smaller, so add l1 and increment l1
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      // l2 is smaller, so add l2.val and increment l2
      list.next = new ListNode(l2.val)
      l2 = l2.next;
    }

    list = list.next;
  }

  // at the end, add whatever list is leftover
  list.next = l1 || l2;

  return head.next;
}

