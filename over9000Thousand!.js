const isgreaterThan9000 = () => new Promise((resolve, reject) => {
    const numbers = []
    for (let i = 0; i < 10; i += 1) {
        numbers.push(Math.round((Math.random() * 50)));
    }
    const sumation = numbers.reduce((acc, curr) => acc + (curr * curr) ,0);
    if (sumation <= 9000) {
        const resultsOfDivision = [2, 3, 5, 10].map(number => sumation / number);
        resolve(resultsOfDivision)
    } else {
        reject(console.log('ITS OVER 9000 THOUSAAAAAAND! this promise should be broken'))
    }    
}); 

isgreaterThan9000().then((result) => 
    new Promise((resolve, reject) => {
        const sumationOfdivision = result.reduce((acc, curr) => acc + curr ,0);
        resolve(console.log(Math.floor(sumationOfdivision)));        
    })
);