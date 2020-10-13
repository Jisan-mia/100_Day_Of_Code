//loop iterate immediately

for (let i = 1; i < 11; i++) {
    //    console.log(i);
}
console.log('outside');
console.log('2nd outside');


//when need we can call function many times
function add(num1, num2) {
    return num1 + num2;
}

var result1 = add(25, 10);

console.log(result1);

console.log('Not adding this time');
console.log('Not going right now');

var result2 = add(100, 150);
console.log(result2)


//largest or smallest number of array
function largestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}
let nums = [45, 87, 25, 65, 25, 98]
let larger = largestNumber(nums);
console.log(larger);
