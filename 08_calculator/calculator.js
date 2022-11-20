const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 / num2;
};

const sum = function(num1, num2) {
	return num1 + num2;
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let result = 1;
  if (num === 0) return 0;
  for (let i = 1; i <= num; ++i)
    result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
