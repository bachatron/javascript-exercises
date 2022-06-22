const removeFromArray = function(...args) {
    console.log (args)
    const array = args[0]
    console.log(array)
    const newArray = []
    array.forEach ((a) => {
        if (!args.includes(a)) {
            newArray.push(a);
        }
    })
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;

console.log (removeFromArray(['a','b','c','d','e'], 2))