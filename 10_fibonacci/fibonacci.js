const fibonacci = function(num) {
    num = +num;
    if (num < 0) return "OOPS";
    let previousNumber = 0;
    let currentNumber = 1;

    for (let i = 0; i < num; ++i) {
        let temp = currentNumber;
        currentNumber += previousNumber;
        previousNumber = temp;
    }
    return previousNumber;
};

// Do not edit below this line
module.exports = fibonacci;
