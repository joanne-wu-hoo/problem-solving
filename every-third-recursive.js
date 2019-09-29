// Given an array of numbers, create a new list with every third number
// Use recursion!

// [10, 20, 30, 40, 50, 60, 70] => [30, 60]

function everyThird(arr, i=2, result=[]){
  if (i >= arr.length) return result;
  result.push(arr[i]);
  return everyThird(arr, i+=3, result);
}
