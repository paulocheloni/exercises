// sum.js
const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return 'at least one parameter is not a number';
    return a + b
};

module.exports = sum;