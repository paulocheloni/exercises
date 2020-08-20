const greetPeople = (people) => {
  let greeting = "Hello ";
  const greetingPeople = people.maps((element) => `${greeting} ${element}`);
  return greetingPeople;
};

module.exports = greetPeople;
