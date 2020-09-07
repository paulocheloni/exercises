// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const word = str.split('');
    const wordReversed = [].concat(word).reverse()
    let result;
    word.forEach((letter, index, array) => result = letter === wordReversed[index])
    return result
}

module.exports = palindrome;

palindrome('ovo')