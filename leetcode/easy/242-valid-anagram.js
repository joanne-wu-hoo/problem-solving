// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let sFC = createFC(s);
    let tFC = createFC(t);
    
    for (let [letter, count] of Object.entries(sFC)){
        if (!tFC[letter]) return false;
        if (sFC[letter] !== tFC[letter]) return false;
    }
    
    return true;
};

function createFC(str){
    let fc = {};
    
    for (let letter of str){
        fc[letter] = (fc[letter] || 0) + 1
    }
    
    return fc;
}

/** Approach
0. if string lengths do nto match, return false
1.create a frequency counter for s and t
2. go through frequency counter for s, try to find matching value in t.
   -- if we can't find the value, return false
   -- if we find the value but the number does not match, return false
   
   at the end if we've passed all these checks, return true


*/
