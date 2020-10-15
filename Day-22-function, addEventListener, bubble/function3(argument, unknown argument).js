//arguments and deal with unknown number of arguments
// arguments of a function is an array like object
// arguments cannot be accessed outside of a function
function addNumbers(num1, num2) {
    //    console.log(arguments[3]);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;

    }
    return sum;
}
var result = addNumbers(3, 7, 10, 15, 20);
console.log(result)
