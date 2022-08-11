module.exports = function check(str, bracketsConfig) {
  str = str.replace(/\d/g, "");
  while(/\[\]|\(\)|\{\}/g.test(str)){
    str = str.replace(/\[\]|\(\)|\{\}/g, "");
  }
  return str == "";
}
