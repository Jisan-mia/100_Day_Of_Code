var age = 18;
var friendsAge = [15, 17, 10, 18];

var shawonAge = friendsAge[2];

friendsAge[1] = 21; //update index 1(17) to 21

var positionOfAge = friendsAge.indexOf(10) //return 3

var position = friendsAge.indexOf(140) //return -1

console.log(friendsAge);

//add an element at the end of the array
friendsAge.push(13);
console.log(friendsAge)

// remove the last item from the array
friendsAge.pop();
console.log(friendsAge)

//remove the first item from the array
friendsAge.shift();
console.log(friendsAge)

//add on or more items in the begining of an array
friendsAge.unshift(11, 13);
console.log(friendsAge)

//problem: find the largest element of an array
let marks = [15, 6, 4, 2, 3, 7, 36, 45];
let max = marks[0];
for (let i = 0; i< marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max);
//smallest element of an array
let marks1 = [15, 6, 4, 2, 3, 7, 36, 45];
let min = marks[0];
for (let i = 0; i< marks1.length; i++){
    var element = marks1[i];
    if(element < min){
        min = element;
    }
}
console.log(min);

