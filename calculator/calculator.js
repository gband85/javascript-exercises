const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce(function(a,b) {
    return a+b;
  },0)
};

const multiply = function(array) {
if (array.length) {
  return array.reduce(function(a,b) {
    return a*b;
  })

}
else  {
  return 0;
}
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  if (n===0) return 1;
	return n*factorial(n-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
