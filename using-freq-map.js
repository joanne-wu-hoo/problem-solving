// for future reference - how to create & use a frequency counter MAP
// map.get, map.set, map.size
// for let [key, entries] OF map

// given two strings, determine if they share a substring in common

function twoStrings(s1, s2) {
  let fc1 = makeFreqCounterMap(s1);
  let fc2 = makeFreqCounterMap(s2);
  let smallerFc;
  let largerFc;

  if (fc1.size <= fc2.size){
    smallerFc = fc1;
    largerFc = fc2;
  } else {
    smallerFc = fc2;
    largerFc = fc1;
  }

  for (let [key, entries] of smallerFc){
    if (largerFc.get(key)) return true;
  }

  return false;
}


function makeFreqCounter(s){
  let fc = new Map();
  for (let l of s){
      let count = (fc.get(l) || 0) + 1;
      fc.set(l, count);
  }
  return fc;
}

// console.log(twoStrings('hello', 'world')); // true
// console.log(twoStrings('hi', 'world')) // false
