// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

test('sums 5,4', () => {
    expect(sum(5,4)).toBe(9);
});

test('sums 4, "5" ', () => {
    expect(sum(4,'5')).toBe('at least one parameter is not a number')
});



