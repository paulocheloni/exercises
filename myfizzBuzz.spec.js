const myFizzBuzz = require('./myfizzBuzz');

test('given a number it should return a string as expected', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(3)).toBe('fizz')
    expect(myFizzBuzz(2)).toBe(2)
})


