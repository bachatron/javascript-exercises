const fibonacci = function(position) {
    let numArray = [0,1];
    if (position >= 0){
        for (let i = 0; i<position; i++) {
            numArray.push(numArray[i] + numArray[i+1]);
            //console.log(numArray) 
        }
        return numArray[position];
    } else return ("OOPS");

};

// Do not edit below this line
module.exports = fibonacci;
