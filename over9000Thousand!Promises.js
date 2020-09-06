const isgreaterThan9000 = () => new Promise((resolve, reject) => {
    const numbers = Array.from(
        {length : 10},
        () => Math.floor(Math.random() * 50) + 1
    );
    
    const sumation = numbers.reduce((acc, curr) => acc + (curr * curr) ,0);
    if (sumation <= 9000) {
        const resultsOfDivision = [2, 3, 5, 10].map(number => sumation / number);
        resolve(resultsOfDivision)
    } else {
        reject();
    }    
}); 

isgreaterThan9000()
    .then(result => result)
    .then(array => console.log(array.reduce((acc, curr) => acc + Math.floor(curr) ,0)))
    .catch((e) => console.log('its over nine thousaaaand'));
