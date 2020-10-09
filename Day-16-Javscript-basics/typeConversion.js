var num1 = 25; //integer number
var num2 = "25.5"; //float number
num2 = parseFloat(num2); //same +num2

console.log(num1 + num2)
console.log(typeof ('' + num1)) //return string


var n1 = 0.1;
var n2 = 0.2;
var total = n1 + n2;
total = total.toFixed(1)
console.log(total);
