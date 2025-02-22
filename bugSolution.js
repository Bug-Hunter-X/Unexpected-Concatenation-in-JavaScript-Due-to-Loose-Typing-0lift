function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: both arguments must be numbers';
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: Invalid input: both arguments must be numbers
console.log(foo(1, 2)); // Output: 3