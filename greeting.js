const greet = (name, greeting = 'Hi') => {
    return `${greeting} ${name}`;
}
const assert = require('assert')

// escreva greet abaixo

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")