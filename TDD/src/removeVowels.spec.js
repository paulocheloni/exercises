const assert = require("assert");
const removeVowels = require("./removeVowels");

const parameter = "Dayane";
const result = "D1y2n3";


assert.strictEqual(removeVowels(parameter), result);
