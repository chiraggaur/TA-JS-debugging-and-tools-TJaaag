// get full name 

// function getFullName(firstName, LastName){
//     let fullName = firstName + ' ' +LastName;
//     return fullName;
// }
// let result = getFullName("chirag","gaur");
// let expected = "chirag gaur";
// let expected2 = "chiraggaur";

// if(result !== expected2){
//     throw new Error(`${result} is not equal to ${expected2}`);
// }

// if(result !== expected){
//     throw new Error(`${result} is not equal to ${expected2}`);
// }

//calculate total amount 

function totalFee(amount, taxRate){
    let totalAmount = amount + (amount * taxRate);
    return totalAmount;
} 
let result = totalFee(100,2);
let expected = 300;
let expected2 = 200;

if(result !== expected2){
    throw new Error(`${result} is not equal to ${expected2}`);
}

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected2}`);
}