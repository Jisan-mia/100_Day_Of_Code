function workDay() {
    console.log("awake")
    console.log("breakfast")
    console.log("office")
}
//workDay();

function addTwoNum(x, y) {
    return x + y;
}
var sum = addTwoNum(5, 10);
console.log(sum);

//function that double a number
function doubleIt(a) {
    var result = a * 2;
    return result;
}
var first = doubleIt(15);
var second = doubleIt(10);
console.log(first + second)

//  functions to work on add, sub , mul and divide,  two number
function add(n1, n2){
    return n1 + n2;
}
function sub(n1, n2){
    return n1 - n2;
}
function mul(n1, n2){
    return n1 * n2;
}
function divide(n1, n2){
    return n1 / n2;
}
var num1 =30;
var num2 = 10;
console.log(add(num1, num2));
console.log(sub(num1, num2));
console.log(mul(num1, num2));
console.log(divide(num1, num2));


