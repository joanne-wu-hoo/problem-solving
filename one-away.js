// We want to check if two strings are, at most, one edit away from being the same.
// An edit is adding, deleting, or changing a single letter.

// Example
// console.log(oneAway("make", "fake")) // true, change m --> f
// console.log(oneAway("task", "take")) // false, need to change s --> k & k --> e
// console.log(oneAway("ask", "asks")) // true, need to add s
// console.log(oneAway("asks", "ask")) // true, need to remove s


function oneAway(str1, str2){
  // if the lengths are off by more than 1, return false
  if (Math.abs(str1.length - str2.length) > 1) return false;

  let changes = 0;
  let i = 0; // str1 incrementer
  let j = 0; // str2 incrementer

  while (i < str1.length && j < str2.length){
    if (str1[i] !== str2[j]) changes++;
    i++;
    j++;

    if (changes > 1) return false;
  }

  while (i < str1.length){
    changes++;
    i++;
    if (changes > 1) return false;
  }

  while (j < str2.length){
    changes++;
    j++;
    if (changes > 1) return false;
  }

  return true;
}

/** Approach
 * 1. increment through str1 with i and str2 with j
 * 2. if val[i] !== val[j], change++
 * 3. while i < str1.length change++
 * 4. while j < str2.length change++
 * 
 * if at any point change > 1 return false
 * 
 * else at end return true 
 */
