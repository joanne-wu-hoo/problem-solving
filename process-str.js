function processString(str){
  // strip non letter characters with regex pattern & lower case letters
  return str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
}
