const findTheOldest = function(array) {
    array.sort((a, b) => {
        (a.yearOfBirth - a.yearOfDeath) - (b.yearOfBirth - b.yearOfDeath) ? 1 : -1
    })
};

// Do not edit below this line
// module.exports = findTheOldest;
