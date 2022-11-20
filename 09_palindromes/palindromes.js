const palindromes = function (string) {
    if (string.length === 1) return true;

    else if (string.length % 2 === 0) {
        const center = string.length/2;
            if(string.slice(0, center).split('').reverse().join('') === string.slice(center))
                return true;
            return false;
    }
    else {
        const center = Math.floor(string.length/2);
        if(string.slice(0, center).split('').reverse().join('') === string.slice(center+1))
            return true;
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
