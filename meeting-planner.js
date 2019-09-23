// Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, 
// returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that 
// satisfies the duration requirement, return an empty array.

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 8
// output: [60, 68]

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 12
// output: [] # since there is no common slot whose duration is 12


function meetingPlanner(slotsA, slotsB, dur){
  let iA=0;
  let iB=0;
  let start;
  let end;

  while (iA < slotsA.length && iB < slotsB.length){
    start = Math.max(slotsA[iA][0], slotsB[iB][0]);
    end = Math.min(slotsA[iA][1], slotsB[iB][1]);

    if (start + dur <= end) return [start, start+dur];

    if (slotsA[iA][1] <= slotsB[iB][1]) {
      iA++;
    } else {
      iB++;
    }
  }

  return [];
}


// A naive solution would loop through both input arrays and check the intersection of every possible pair 
// slots to find an overlap of at least dur seconds. This isn’t an efficient solution and its time complexity 
// is O(N⋅M). 

// Since the arrays are sorted by the slots’ start times, we can iterate over both arrays in a single loop. 
// We use two indices, one for each array, while incrementing one index at a time according the following rules:
// - If there is a minimal overlap of dur between two given times slots, return the pair [start, start + dur]
// - Otherwise, increment the index of the array with the earlier time slot.
