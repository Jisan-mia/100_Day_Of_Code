// 5! = 1*2*3*4*5
//iterative way
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
let result = factorial(5);
//console.log(result);


//recursive function
// 5*4*3*2*1*1 

function factorialRecurs(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * factorialRecurs(num - 1);
    }
}

let result1 = factorial(5);
console.log(result1);
