module.exports = function check(str, bracketsConfig) {
  while(/\[\]|\(\)|\{\}\|\||\1\2|\3\4|\5\6|\7\7|\8\8/g.test(str)){
    str = str.replace(/\[\]|\(\)|\{\}\|\||\1\2|\3\4|\5\6|\7\7|\8\8/g, "");
  }
  return str == "";
}
