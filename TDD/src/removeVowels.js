const removeVowels = (word) => {
  const characters = [...word];
  const encript = {
    'a': "1",
    'e': "2",
    'i': "3",
    'o': "4",
    'u': "5",
  };
  
  const results = characters.map(element => {
      if (encript[element]) {
          element = encript[element];
      }
      return element;
  });

  return results;
};



module.exports = removeVowels;


