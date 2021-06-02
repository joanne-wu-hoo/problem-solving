// sourec: https://leetcode.com/problems/longest-substring-without-repeating-characters/

// longest substring

// "abcabcbb"

// Sliding window, while keeping track of letters we've seen
// When we encounter a letter we've already seen, we need to: 1) move left up until one past the last time we saw the letter, 2) update set
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

/** Another way
Still sliding window with left and right initialized at 0, move right out, when you see a duplicate letter, then we need to move left in
But instead of using a set, use an object that maps each letter to the index where the next sliding window would start

ex. r i t h m s c h o o l
idx 0 1 2 3 4 5 6 7 8 9 10
seenMap:
{ r: 1,
  i: 2,
  t: 3,
  h: 4,
  m: 5 }

when we move right over to index 7 (h), we've already seen h before, so we will move the left pointer to seenMap[h] = 4, (this is one past the index of the first h)
OR to left, whichever is bigger
*/

function findLongestSubstring(str){
  let left = 0;
  let maxLength = 0;
  let mapLetterToStartOfNextSlidingWindowIdx = {}

  for (let right = 0; right < str.length; right++){
    let currentLetter = str[right];
    if (mapLetterToStartOfNextSlidingWindowIdx[currentLetter]){
      left = Math.max(left, mapLetterToStartOfNextSlidingWindowIdx[currentLetter])
    }
    mapLetterToStartOfNextSlidingWindowIdx[currentLetter] = right + 1;
    maxLength = Math.max(maxLength, right-left+1);
  }

  return maxLength;
}
