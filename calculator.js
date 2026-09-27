function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function square(a) {
  if (typeof a !== 'number') {
    throw new Error('Argument must be a number');
  }
  return a * a;
}

function squareRoot(a) {
  if (typeof a !== 'number') {
    throw new Error('Argument must be a number');
  }
  if (a < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(a);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot
};
