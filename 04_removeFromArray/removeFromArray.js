const removeFromArray = function(array, num) {
	let newArray = [];
	for (let i = 0; i < array.length; ++i)
		if (array[i] != num)
			newArray.push(array[i]);
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
