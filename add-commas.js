/** addCommas
 * given a number, return a string of the number formatted with commas
 * ex. 1234 => 1,234
 * ex. -1234 => -1,234
 * ex. -1234.56 => -1,234.56
 */

function addCommas(num) {
  // treat all nums as positive
  // but if num is negative, remember the sign
  let sign = "";
  if (num < 0) sign = "-";
  num = Math.abs(num);

  // split num on decimal point
  let [whole, decimal] = num.toString().split(".");

  if (decimal) {
    return `${sign}${insertCommas(whole)}.${decimal}`;
  } else {
    return `${sign}${insertCommas(whole)}`;
  }
}

function insertCommas(num) {
  let commaStr = "";
  let commaIdx = 0;

  // start incrementing from the back
  for (let i=num.length-1; i>=0; i--){
    commaStr = num[i] + commaStr;
    commaIdx++;

    // add a comma after every third character (except at beginning)
    if (commaIdx % 3 === 0 && i !== 0){
      commaStr = "," + commaStr;
    }
  }

  return commaStr;
}

