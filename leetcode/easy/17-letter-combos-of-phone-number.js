// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/** Approach
1. map numbers to letters
{
 2: "abc"
 3: "def"
}

2. go through values in digits
for each value, get the appropriate letters and store in array
ex. 2 => abc, 3 => def

let digitNumbers = ["abc", "def", "ghi"];

3. find all combos of digits recursively? 


helper([], idx=0) // [], "abc"
       cur   idx to index into digitLetters
       [], "abc"

go through each value in digits and push into cur, idx+1
[], [a], [b], [c], depleted abc

[a], "def"
[ad], "ghi", [ae] "ghi", [af] "ghi", 
[adg] adh adi
    
[b] "def"
[bd] "ghi"

base case
- if we're at the end of digit numbers, return 

do things:
- if cur.length === digits.length, output.push(cur.join(""))

*/

var mapLettersToDigits = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jki",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
}

var letterCombinations = function(digits) {
    if (digits === "") return [];
    
    let output = [];
    
    let digitLetters = []
    for (digit of digits){
        digitLetters.push(mapLettersToDigits[digit])
    }
            
    function letterComboHelper(cur, idx){
        if (cur.length === digits.length) output.push(cur.join(""));

        if (!digitLetters[idx]) return; 
        
        for (let letter of digitLetters[idx]){
            letterComboHelper(cur.concat(letter), idx+1);
        }
        
    }
    
    letterComboHelper([], 0) // 
    
    return output;
};
