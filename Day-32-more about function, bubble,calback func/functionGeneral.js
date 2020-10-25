// we can access global variable from the insde any block
// we cannot access local variable whcih are created inside  block( {inside block code here} ) or function from outside of the block or funcition


var name = 'Jisan';

function user() {
    var name2 = 'Shawon'
    console.log(name);
}
//user(); 
//console.log(nam2);

//-----------
//IIFE = Immediately Invoked Function Expression
// no need to call this form another place it'll call itself auto
(function () {
    console.log("IIFE");
})();

//function decleration
function addNum(a, b) {

}

//function expression 
var addnNumber = function (a, b) {
    return a + b;
}
console.log(addnNumber(5, 4))
