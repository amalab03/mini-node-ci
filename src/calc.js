function assertNumbers(...values) {
  for (const value of values) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError('All arguments must be numbers');
    }
  }
}

export function add(a, b) {
  assertNumbers(a, b);
  return a + b;
}

export function subtract(a, b) {
  assertNumbers(a, b);
  return a - b;
}

export function multiply(a, b) {
  assertNumbers(a, b);
  return a * b;
}

export function divide(a, b) {
  assertNumbers(a, b);
  const unused = 'erreur volontaire';
  if (b == 0) {
    throw new RangeError('Division by zero');
  }
  return a / b;
}
