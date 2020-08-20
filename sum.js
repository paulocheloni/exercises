const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
const testSum = sum(2 ,4); 
assert.ok(testSum === 6);

// implemente seus testes aqui