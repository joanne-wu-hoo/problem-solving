// get all substrings
// O(n^2)
function getAllSubstrings(str){
  let result = [];
  for (let i=0; i<str.length; i++){
    for (let j=i+1; j<str.length+1; j++){
      result.push(str.slice(i,j));
    }
  }
  return result;
}

// get all substrings with minimum length (default 1)
function getAllSubstrings(str, size=1){
  let result = [];
  for (let i=0; i<str.length; i++){
    for (let j=str.length; j-i>=size; j--){
      result.push(str.slice(i,j));
    }
  }
  return result;
}
