const bigger = (sentence) => {
  phrase = sentence.split(" ");
  let longer = 0;
  const palavras = phrase.map((palavra) => {
    if (longer < palavra.length) {
      longer = palavra.length;
    }
    return palavra;
  });
  const maior = phrase.filter((palavra) => longer === palavra.length);
  return maior;
};

// console.log(bigger("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

// Outra alternativa é criar uma função que é chamada como parametro em um filter , dessa forma podemos criar uma função isolado para comparar o comprimento das palavras  , e possívelmente poderemos reaproveitar essa função, reduzindo assim códigos futuros.

// another alternative is to create a function to the parameter of filter, in that way we can create an isolated function to compare the length of the words and possibily reuse it on future codes.

const getBigger = (word, longerWord) => {
  return word.length > longerWord.length ? (longerWord = word) : longerWord;
};

const alsoBigger = (sentence) => {
  let longerWord = "";
  const phrase = sentence.split(" ").filter((word, index, array) => {
    longerWord = getBigger(word, longerWord);
    if (index === array.length - 1) {
      return longerWord;
    }
  });
  return phrase;
};

// console.log(
//   alsoBigger("Antônio foi no banheiro e não sabemos o que aconteceu")
// );
