//when to use a function
//we should use function when we need same code again and again. 

function evenIfy_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num % 2 != 0) {
            console.log(num * 2, 'is odd number')
        } else {
            console.log(num, 'is even number')
        }
    }
}
const nums = [15, 13, 34, 12, 5, 20]
evenIfy_all(nums)
console.log('---------------------------')

const friendsAge = [15, 13, 17, 20, 18];
evenIfy_all(friendsAge)
