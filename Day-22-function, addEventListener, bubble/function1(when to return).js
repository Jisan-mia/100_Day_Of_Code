//when to return from function and from where 
// you should return function when you need to do something with the value
function evenIfy(num) {
    var result;
    if (num % 2 == 0) {
        result = num
    } else {
        result = num * 2;
    }
    return result;
}

var result = evenIfy(7);
var square = result * result
console.log('square', square);

function evenIfy_all(nums) {
    var even_array = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        var result = evenIfy(num);
        even_array.push(result);
    }
    return even_array;
}
var nums = [15, 13, 34, 12, 5, 20]
var nums_even = evenIfy_all(nums);
console.log(nums_even);
