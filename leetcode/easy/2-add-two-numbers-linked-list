// https://leetcode.com/problems/add-two-numbers/


function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
  let result = new ListNode(null);
  let cn = result;
  let carryover = 0;
  let prev;
  
  while (l1 || l2){
    let l1val = l1 ? l1.val : 0;
    let l2val = l2 ? l2.val : 0;
    let sum = l1val + l2val + carryover;
    
    if (sum >= 10){
      cn.val = sum-10;
      carryover = 1;
    } else {
      cn.val = sum;
      carryover = 0;
    }
    
    cn.next = new ListNode(null);
    prev = cn;
    cn = cn.next;
  
    // increment l1 and l2
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
 
  // handle leftover carryover
  if (carryover) {
   prev.next.cal = carryover;
  } else {
    prev.next = null;
  }
  
  return result;
}
