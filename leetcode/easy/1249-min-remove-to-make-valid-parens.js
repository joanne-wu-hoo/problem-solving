// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

const minRemoveToMakeValid = (str) => {
  let res = str.split("");

  let leftParenIdxStack = [];

  for (let i = 0; i < res.length; i++){
    let currentChar = res[i];
    if (currentChar === "(") {
      // whenever you see left paren, put idx in stack
      leftParenIdxStack.push(i);
    } else if (currentChar === ")"){
      // whenever you see right paren
      if (leftParenIdxStack.length){
        // and there ARE values in leftParenIdxStack, pop last index off of left stack
        leftParenIdxStack.pop();
      } else {
        // if there are NO values in leftParenIdxStack, then you need to remove the right paren
        // remove by replacing value with ""
        res[i] = "";
      }
    }
  }

  // remove any characters remaining in leftParenStack (by replacing value with "")
  if (leftParenIdxStack.length){
    for (let idx of leftParenIdxStack){
      res[idx] = "";
    }
  }

  return res.join("");
}

/** Approach
 * 0. turn str into array with res = str.split("");
 * 1. scan from left to right with index for loop
 * 2. whenever you see (, put index in leftParenIdxStack
 * 3. whenever you see )
 *    - and there ARE values in leftParenIdxStack, pop last index off
 *    - and there are NO values in leftParenIdxStack, then we need to remove the current character (replace with "")
 * 4. at end, remove any characters remaining in leftParenStack (replace with "")
 * 5. return res.join("");
 */
