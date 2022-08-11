module.exports = function check(str, bracketsConfig) {
  var compare = "";
  while (str.length != compare.length){
    compare = str;
    str = str.replace("12", "")
      .replace("34", "")
      .replace("56", "")
      .replace("77", "")
      .replace("88", "")
      .replace("()", "")
      .replace("[]", "")
      .replace("{}", "");
  }
  return (str.length == 0);
}
