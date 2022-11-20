const sumAll = function(num1, num2) {
	let sum = 0;
	if (num2 < 0)
		return "ERROR";
	for (let i = num1; i <= num2; ++i)
		sum += i;
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
