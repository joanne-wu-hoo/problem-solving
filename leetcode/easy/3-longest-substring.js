// sourec: https://leetcode.com/problems/longest-substring-without-repeating-characters/

// longest substring

// "abcabcbb"


const lengthOfLongestSubstring = function(s){
  let left = 0;
  let maxLength = 0;
  let seen = new Set();
  
  for (let right = 0; right < s.length; right++){
    while (seen.has(s[right])){
      seen.delete(s[left]);
      left++;
    } 
    seen.add(s[right])
    maxLength = Math.max(maxLength, right-left+1)
  
  }
  
  return maxLength;
}
