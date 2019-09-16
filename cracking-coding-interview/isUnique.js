function isUnique(arr){
  if (arr.length === 0 || arr.length === 1) return true;

  let uniqueVals = new Set();
  for (let val of arr){
    if (uniqueVals.has(val)) return false;
    uniqueVals.add(val);
  }
  return true;
}

isUnique([1,2,3,4,5]) // true
isUnique([1,2,3,3,5]) // false