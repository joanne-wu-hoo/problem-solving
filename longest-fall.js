// given an array, return the length of longest consecutive decrease of integers

function longestFall(arr){
  let count=1;
  let maxCount=0;
  for (let i=1; i<arr.length;i++){
    if (arr[i]<arr[i-1]){
      count++;
      maxCount = Math.max(count, maxCount);
    } else {
      count=1;
  }
  return maxCount;
}

longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
