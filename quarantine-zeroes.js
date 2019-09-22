// Time complexity: O(n)
// Space complexity: O(1)

// Given an array, move any zeroes to the end while maintaining the relative order of non-zero numbers.
// Return the same array, just sorted. 

function quarantineZeros(nums){
  let insertIdx = 0;

  for (let num of nums){
    if (num !== 0){
      nums[insertIdx] = num;
      insertIdx++;
    }
  }

  while (insertIdx < nums.length){
    nums[insertIdx] = 0;
    insertIdx++;
  }

  return nums;
}

console.log(quarantineZeros([0, 1, 0, 3, 12])) //[1, 3, 12, 0, 0]);
console.log(quarantineZeros([6, 1, 2, 3, 5, 1, 0])) //[6, 1, 2, 3, 5, 1, 0]);
console.log(quarantineZeros([1, 3, 10, 2])) //[1, 3, 10, 2]);
console.log(quarantineZeros([0, 0, 0])) //[0, 0, 0])
