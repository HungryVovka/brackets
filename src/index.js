module.exports = function check(example, brackets) {
  for (var i = example.length; i >= 0; i--){
    for (var j = 0; j < brackets.length; j++){
      while (example
             .includes(brackets[j]
                       .join(""))){            
            example = example
              .replace(brackets[j]
                       .join(""), "");           
        } 
      }
    }
    return example == "" ? true : false;
}
