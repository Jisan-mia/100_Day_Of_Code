//Switch statement 

var num = 100;

switch (num) {
    case 1000:
        console.log("I am thousand");
        break;
    case 100:
        console.log("I am hundred");
        break;
    case 20:
    case 10:
        console.log("I am 20 or 10");
        break;
    default:
        console.log(`I dont't know who you are`);
}

//what day is today
var day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = 'Mon';
        break;
    case 2:
        day = 'Tue';
        break;
    case 3:
        day = 'Wed';
        break;
    case 4:
        day = 'Thu';
        break;
    case 5:
        day = 'Fri';
        break;
    case 6:
        day = 'Sat';
}
console.log(day);
console.log("happy coding")
