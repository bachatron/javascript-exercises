const add = function(n1, n2) {
  return n1+n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(array) {
	let sum = 0
  for (let num of array) {
    sum += num;
  }
  return sum;  
};

const multiply = function(array) {
  let multi = 1;
  for (let num of array) {
    multi *= num;
  }
  return multi;

};

const power = function(n1, n2) {
  return n1 ** n2;
	
};

const factorial = function(num) {
  n = 1;
  for (let i=1; i<=num; i++) {
    console.log(n);
    console.log(i);
    n *= i; 
  }

  return n;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
