// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    let value = 0;
    
    for (let i=1; i<=s.length; i++){
        if (romanValues[s[i-1]] < romanValues[s[i]]){
            value -= romanValues[s[i-1]];
        } else {
            value += romanValues[s[i-1]]
        }
    }
    
    return value;
};

const romanValues = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

/** Approach
* if smaller number before larger, we are going to subtract the smaller value
*/
