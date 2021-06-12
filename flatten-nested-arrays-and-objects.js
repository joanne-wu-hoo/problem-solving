/** flatten nested array */
function flattenNestedArray(arr){
  let output = [];

  for (let entry of arr){
    if (Array.isArray(entry)){
      output.push(...flattenNestedArray(entry))
    } else {
      output.push(entry);
    }
  }

  return output;
}


/** gatherStrings: given an object, return an array of all of the string values. the object's values can also be objects */

function gatherStrings(obj) {
  let output = [];

  for (let key in obj){
    if (typeof obj[key] === "string") output.push(obj[key]);
    if (typeof obj[key] === "object") output.push(...gatherStrings(obj[key]))
  }

  return output;
}
