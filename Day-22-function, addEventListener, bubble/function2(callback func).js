//calback function and pass different function
// when we pass  function to a function as a parameter and call the thant passed function from the function again, this called callback function
// 2 types of callback function
//i) Asynchronous 
//ii) synchronous 

function explainCalback(name, age, task) {
    console.log('Hello ', name);
    console.log('Your age ', age);
    task();
}

function washHand() {
    console.log("wash hand with soap");
}

function takeShower() {
    console.log("Take shhower");
}

function scrollFacebook() {
    console.log("scroll facebook")
}
explainCalback('Jisan', 18, washHand);
explainCalback("Shawon", 17, takeShower);
explainCalback("Sogir", 13, scrollFacebook);
