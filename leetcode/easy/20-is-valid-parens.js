// https://leetcode.com/problems/valid-parentheses/

function isValidParens(s){
  let stack = [];
  let openBrackets = new Set(["{","(","["]);
  let bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let val of s){
    if (openBrackets.has(val)){
      stack.push(val);
    } else {
      // check if current val is the closing bracket for last val
      let lastVal = stack[stack.length-1];
      if (val !== bracketMap[lastVal]){
        // if current val does not close last seen bracket, invalid expression
        return false;
      } else {
        // if current val does close last seen bracket, remove last seen bracket
        stack.pop();
      }
    }
  }

  if (stack.length > 0) return false;
  return true;
}

isValidParens("()[]{}") // true
isValidParens("][") // false
isValidParens("(())") // true
isValidParens("[()]") // true
isValidParens("[(])") // false

/** Approach
 * 1. initialize an array to store parens we've seen
 * 2. increment through string
 * - if its an open bracket, add to array
 * - if its a closed bracket, check if it closes the last seen paren
 *    - if YES, then remove paren from array, move on
 *    - if NO, then return false
 * - if at the end the stack is not empty --> return false
 */
