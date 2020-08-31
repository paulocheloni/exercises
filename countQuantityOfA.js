    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((acc, curr) => {
    return (curr.split('').filter(letter => letter.toLowerCase() === 'a').length) + acc;
  },0);  
}

assert.deepEqual(containsA(), 20);