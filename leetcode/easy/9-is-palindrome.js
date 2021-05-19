// source: https://leetcode.com/problems/palindrome-number/

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:
// Input: 121
// Output: true

// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
  let xStr = x.toString();
  let left = 0;
  let right = xStr.length - 1;

  while (right > left) {
    if (xStr[left] !== xStr[right]) {
      return false;
    } 

    left++;
    right--;
  }

  return true;
};


/** Approach
 * - multipointer:
 *  - left = 0
 *  - right = arr.length-1
 * - if the values are the same,
 *  - left++, right--
 * - continue while right > left
 */
