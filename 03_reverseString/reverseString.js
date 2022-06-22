const reverseString = function(string) {
    let splittedString = string.split('')
    let newString = []
    for (let x = splittedString.length -1; x >= 0; x--) {
        newString.push(splittedString[x])
    }
    return newString.join('');
};

console.log(reverseString('Hola'))
// Do not edit below this line
module.exports = reverseString;
