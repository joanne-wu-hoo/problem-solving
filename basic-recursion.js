/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i+1);
}

// product([1,2,3,4]) // 24

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, maxLength=0) {
  if (i === words.length) return maxLength;

  maxLength = Math.max(maxLength, words[i].length);

  return longest(words, i+1, maxLength)
}

// longest(["a", "ab", "abc", "kitty", "blah"]) //5

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, processedStr="") {
  if (i >= str.length) return processedStr;

  processedStr += str[i];

  return everyOther(str, i+2, processedStr);
}

// everyOther('abcdefghijk') // acegik
