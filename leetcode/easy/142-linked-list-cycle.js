// https://leetcode.com/problems/linked-list-cycle-ii/

// Naive
// Time: O(N)
// Space: O(N)
var detectCycle = (head) => {
  let seen = new Set();
  let current = head;
  
  while (current) {
    if (seen.has(current)){
      return current;
    } 
    seen.add(current);
    current = current.next;
  }
  
  return null;
}

// ---------------------------------------------------------------

// Optimized: Tortoise & Hare
// Time: O(N)
// Space: O(1)

// Idea is you have a slow pointer (+1) and a fast pointer (+2)

// If we do NOT have a cycle, then at some point hare/hare.next/hare.next.next will be null

// If we have a cycle, then the fast pointer will catch up to the slow pointer -- this is the "cycle detection node"
// Then, to determine the node where the cycle starts:
// 1. Istantiate two pointers: one at the start and on at the cycle detection node
// 2. Advance until the pointer values equal each other, return the pointer

var detectCycle = (head) => {
  let tortoise = head;
  let hare = head;
  
  while (true){
    tortoise = tortoise.next;
    hare = hare.next;
    
    if (hare === null || hare.next === null){
      return false;
    } else {
      hare = hare.next;
    }   

    // when we find the cycle, break;
    if (hare === tortoise) break;
  }
  
  // deteremine the node where the cycle starts
  let p1 = head;
  let p2 = hare; // could also be tortoise since tortoise and hare both point at the same node
  
  while (p1 !== p2){
    p1 = p1.next;
    p2 = p2.next;
  }
  
  return p1; // could have also returned p2 since p1 and p2 point at the same node
}
