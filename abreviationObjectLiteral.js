const assert = require('assert')
const { createBrotliCompress } = require('zlib')

const palio = ["Palio", "Fiat", 2019]
const shelbyCobra = ["Shelby Cobra", "Ford", 1963]
const chiron = ["Chiron", "Bugatti", 2016]

const toObject = (carro) => {
    const [name, brand, year] = carro 
    return {
        name,
        brand,
        year,
    }
}

assert.deepEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 })
assert.deepEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 })
assert.deepEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 })