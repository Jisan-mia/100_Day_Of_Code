var nums = [54, 23, 53, 24, 63, 11];

for (var i = 0; i < nums.length; i++) {
    var element = nums[i];
    if (element % 2 != 0) {
//        console.log(element);
    }
}

// odd number between 1-100
for (var i = 0; i <100; i++){
    if(i%2 != 0){
//        console.log(i);
    }
}

//sum of all the elements of an array
var sum = 0;
for (var i = 0; i < nums.length; i++){
    let element = nums[i]
    sum = sum + element;
}
console.log(sum);

