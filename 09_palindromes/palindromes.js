const palindromes = function (word) {
    const reversedWord = word.toLowerCase().split("").reverse().join("").replace(/[^a-z0-9]/gi, '');
    return reversedWord === word.toLowerCase().replace(/[^a-z0-9]/gi, '');
};

// Do not edit below this line
module.exports = palindromes;
