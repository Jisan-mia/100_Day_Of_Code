//a variable declared with let keyword can be reassigned only inside its blook

//a variable declared with const keyword cannot be reassigned anywhere of the code

//uses of const keyword
const PI = 3.1416;
console.log(PI);

const numbers = [3, 5, 2];

numbers[2] = 6;
numbers.push(9);

//console.log(numbers);

const studentObj = {
    name: 'Jisan',
    age: 18,
    class: 11
}
studentObj.name = "Ahsan";
studentObj.roll = 1;

//console.log(studentObj)

//uses of let keyword
let stuName = 'Rahad';
stuName = 'Shawon';
console.log(stuName)

let sum = 0;

for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(sum);
