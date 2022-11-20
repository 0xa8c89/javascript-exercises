const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,""); // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex

    console.log(string);
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
