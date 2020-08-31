    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function createAverageStudent() {
  return alunos.map(function (aluno, index) {
      return {
        average: (notas[index].reduce((acc, curr) => acc + curr)) / notas[index].length,  
        name: aluno,        
      }
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(createAverageStudent(), expected);