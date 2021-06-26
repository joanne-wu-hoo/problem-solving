// https://leetcode.com/problems/3sum/

// If you fix one of the numbers, the problem becomes 2sum!

function threeSum(nums) {
  if (nums.length < 3) return [];

  nums = nums.sort((a, b) => a - b);
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    // if nums[i] is above the target, we don't need to continue looking (since the array is sorted)
    if (nums[i] > 0) return output;

    // if the number is a duplicate, we dont want to evaluate it (to avoid dups)
    if (nums[i] === nums[i - 1]) continue;

    // fix "num" as nums[i]
    let ntf = 0 - nums[i];
    let pairs = twoSumSorted(nums.slice(i + 1), ntf);

    for (let pair of pairs) {
      output.push([nums[i]].concat(pair));
    }
  }

  return output;
}

function twoSumSorted(nums, target) {
  let output = [];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      output.push([nums[left], nums[right]]);
      left++;
    } else if (sum < target) {
      // go right
      left++;
    } else {
      right--;
    }
  }

  return output;
}

// twoSumSorted([-1, 0, 1, 2], 1); // [-1,2],[0,1]

threeSum([-1, 0, 1, 2, -1, -4]); // [[-1,-1,2],[-1,0,1]]
