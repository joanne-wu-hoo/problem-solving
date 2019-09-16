// source: https://leetcode.com/problems/longest-common-prefix/

/** Longest common prefix 
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Example 2:
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 */

function longestCommonPrefix(wordArr) {
  // handle empty array
  if (wordArr.length === 0) return '';

  let i = 0;
  let longestPrefix = '';

  let wordLengths = wordArr.map(w => w.length);
  let shortestWord = Math.min(...wordLengths);

  let currentLetters = [];

  while (i < shortestWord) {
    let currentLetter = wordArr[0][i];
    currentLetters = wordArr.map(w => w[i]);

    if (currentLetters.every(l => l === currentLetter)) {
      i++;
      longestPrefix = longestPrefix + currentLetter;
    } else {
      break;
    }
  }

  return longestPrefix;
}


/** Approach
 * - initialize a pointer i = 0
 * - initialize longestPrefix = ''
 * - for each word in wordArr, take the letter at i index
 * - if ALL of the letters are the same (use every),
 *     - increment pointer
 *     - add letter to longestPrefix
 * - continue while pointer < smallest word length
 * - return longestPrefix
 */


 /** Big O Analysis 
  * Space complexity - O(n)
  * Time complexity - O(n)
  */