const getChange = (payable, paid) => {
    const coins = [200, 100, 50, 20, 10, 5, 2, 1];
    const change = [];
    const { length } = coins;
    let remaining = paid - payable;
    let quantity;
    coins.forEach(coin => {
       if (remaining % coin !== remaining) {         
         quantity = Math.floor(remaining / coin);
         remaining = remaining % coin;         
         for (let i = 0; i < quantity; i+= 1) {
            change.push(coin);              
         }           
       }   
    });  
    return change;  
};

console.log(getChange(486, 600))

