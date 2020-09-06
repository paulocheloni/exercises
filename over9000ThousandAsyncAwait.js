const createNRandomNumbers = (quantityOfNumbers, range) => {
    return Array.from(
        {length : quantityOfNumbers},
        () => Math.floor(Math.random() * range) + 1
    );
};

const sumNumbers = async () => {   
        const numbers = createNRandomNumbers(10, 50);
        const sumation = numbers.reduce((acc, curr) => acc + (curr * curr) ,0);
        if (sumation > 9000) {
            throw new Error()
        } else {
            return sumation;
        }    
};

const createArrayFromSum = async (sum) => [2,3,5,10].map(num => sum / num);

const fetchPromise = async () => {
    try {
        const sum = await sumNumbers();
        const array = await createArrayFromSum(sum);
        console.log(array);
    } catch (e) {
        console.log('its over nine thousaaaand');
    }    
};

fetchPromise();







