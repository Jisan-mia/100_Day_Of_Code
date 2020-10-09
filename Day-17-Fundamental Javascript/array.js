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
