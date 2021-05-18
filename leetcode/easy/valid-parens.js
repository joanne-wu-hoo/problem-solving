// Valid parens
// https://leetcode.com/problems/valid-parentheses/

const leftParens = new Set(['(', '{', '['])
const rightParens = new Set([')', '}', ']'])

const checkIfParensMatch = function(lastParen, paren) {
    if (lastParen === "("){
        return paren === ")";
    } else if (lastParen === "{"){
        return paren === "}"
    } else if (lastParen === "["){
        return paren === "]"
    }
}

const isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    if (rightParens.has(s[0])) return false;
    
    let leftParenStack = [];
    
    for (let paren of s){
        if (leftParens.has(paren)){
            leftParenStack.push(paren)
        } else {
            let lastParen = leftParenStack.pop();
            let validParen = checkIfParensMatch(lastParen, paren)
            if (!validParen) return false;
        }
    }
    
    return leftParenStack.length === 0;
};
