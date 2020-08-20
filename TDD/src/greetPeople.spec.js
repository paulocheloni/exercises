const assert = require("assert");
const greetPeople = require("./greetPeople");

const parameter = ["Irina", "Ashleigh", "Elsa"];
const result = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];

assert.deepStrictEqual(greetPeople(parameter), result);
