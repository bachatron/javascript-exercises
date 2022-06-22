const ftoc = function(temp) {
  let tempInC = (temp - 32) / 1.8
  if (Number.isInteger(tempInC)) return tempInC; 
  else return (+tempInC.toFixed(1));
};

const ctof = function(temp) {
  const tempInF = (temp * 1.8) + 32
  if (Number.isInteger(tempInF)) return tempInF;
  else return (+tempInF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
