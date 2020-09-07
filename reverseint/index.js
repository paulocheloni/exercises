// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n >= 0) {
        const number = n.toFixed(0)
        return Number(number.split('').reverse().join(''));
    } else {
        const number = (n * -1).toFixed(0);
        return Number(`-${number.split('').reverse().join('')}`)
    }    
}

reverseInt(10)

module.exports = reverseInt;
