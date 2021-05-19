// sourec: https://leetcode.com/problems/longest-substring-without-repeating-characters/

// longest substring

// "abcabcbb"

function findLongestSubstring(s, count=1, i=0, j=1){
  if (i > s.length || j > s.length) return count;

  if (s[i] === s[j]){
    i++;
    j++;
    count=0;
    return findLongestSubstring(s, count, i, j);
  }

  if (s[i] !== s[j]){
    count = count + 1;
    j++;
    return findLongestSubstring(s, count, i, j);
  }

}

/** Approach
 * initialize count = 0; 
 * initialize pointers at i=0 and j=1
 *  - if i === j, i++, j++, count = 0, recurse while i < length
 *  - if i !== j, j++, count++
 * 
 * return substring
 */

 /** Big O Analysis
  * Time complexity: O(n)
  * Space complexity: O(n)
  */
