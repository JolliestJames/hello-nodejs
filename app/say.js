exports.helloTo = function(name) {
  return "Hello " + name;
}

exports.theSum = function(leftOperand, rightOperand) {
  var left = parseInt(leftOperand);
  var right = parseInt(rightOperand); 
  return JSON.stringify(left + right);
}

exports.theQuotient = function(leftOperand, rightOperand) {
  left = parseInt(leftOperand);
  right = parseInt(rightOperand);
  return JSON.stringify(left/right);
}

exports.theProduct = function(leftOperand, rightOperand) {
  left = parseInt(leftOperand);
  right = parseInt(rightOperand);
  return JSON.stringify(left*right);
}

exports.theRemainder = function(leftOperand, rightOperand) {
  left = parseInt(leftOperand);
  right = parseInt(rightOperand);
  return JSON.stringify(left%right);
}

exports.theDifference = function(leftOperand, rightOperand) {
  left = parseInt(leftOperand);
  right = parseInt(rightOperand);
  return JSON.stringify(left-right);
}