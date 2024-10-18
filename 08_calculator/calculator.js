const add = function(a,b) {
	let sum = a + b
  return sum;
};

const subtract = function(a, b) {
	let sum = a - b
  return sum;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, current) => acc * current, 1)
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  if (a===0) return 1;
  let acc = 1;
//iterate through number from a to 1
for(let i=a; i > 0; i--){
  //multiple each iteration of i to acc
  acc *= i;
}
return acc
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
