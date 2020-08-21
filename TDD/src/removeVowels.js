const removeVowels = (word) => {
  const characters = [...word];
  const encript = {
    'a': "1",
    'e': "2",
    'i': "3",
    'o': "4",
    'u': "5",
  };
  let count = 1
  const results = characters.map((element) => {
      if (encript[element]) {
          element = count;
          count += 1;
      }
      return element;
  });

  return results.join('');
};

module.exports = removeVowels;


