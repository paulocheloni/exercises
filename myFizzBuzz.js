const assert = require("assert");
const { isMainThread } = require("worker_threads");

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

const fizzbuzz = myFizzBuzz(15);
assert.ok(fizzbuzz === "fizzbuzz");
const fizz = myFizzBuzz(3);
assert.ok(fizz === "fizz");
const buzz = myFizzBuzz(10);
assert.ok(buzz === "buzz");
const notFizz = myFizzBuzz(8);
assert.ok(notFizz === 8);
// implemente seus testes aqui
