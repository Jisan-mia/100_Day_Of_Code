// how to organize code inside a function



function addNumbers(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }


    function logInfo(message) {
        console.log(message);
    }

    logInfo("good morning")

    var double = sum * 2
    return double;
}
var result = addNumbers(3, 7, 10, 15, 20);
console.log(result)
