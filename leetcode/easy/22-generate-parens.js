// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */


var generateParenthesis = function(n) {    
    let output = [];
    
    let iterationCount = 1;
    // helper recursion function that updates output
    function genParenHelper(current, numOpen, numLeftParens, numRightParens){
        // base case
        if (!numLeftParens && !numRightParens) {
            output.push(current); 
            return;
        }
        
        
        console.log("called gen paren helper with: ")
        console.log({current, numOpen, numLeftParens, numRightParens})
        
        
        if (numOpen === 0){
            // need to add left
            genParenHelper(current+"(", numOpen+1, numLeftParens-1, numRightParens);
        } else {
            // can add left or right
            
            // adding left if there is left to add
            if (numLeftParens) {
                genParenHelper(current+"(", numOpen+1, numLeftParens-1, numRightParens);
            }
            // adding right if there is right to add
            if (numRightParens){  
                genParenHelper(current+")", numOpen-1, numLeftParens, numRightParens-1);
            }
        }
        
    }
    
    genParenHelper("(", 1, n-1, n)
    
    return output;
};


// generateParenthesis(3)
/** 
Brainstorm
- Need to start w/ left and end w/ right for parens to be valid

Keep track of:
- how many open left parens we have (numOpen)
- how many left parens we can still add (numLeftParens)
- how many right parens we can still add (numRightParens)


Recursive  -- whats the function signature?
- current: keep track of the string we're building
- numOpen?: keep track of how many open left parens there are
- numLeftParens
- numRightParens:

base case: if we've run out of left or right parens, then we've created a valid paren option, push into options
if (!numLeftParens && !numRightParens) output.push(current); 
 
do: 
if numOpen = 0, we want to add a left
if numRightParens >= numOpen, then we can either add left or right

if we add a left paren: 
- numOpen++
- numLeftParens--;

if we add a right paren:
- numRightParens--
- numOpen--; 

progress:



if numOpen === 0, can only add L

if numLeftParens = 1, numRightParens = 1, need to add left

*/
