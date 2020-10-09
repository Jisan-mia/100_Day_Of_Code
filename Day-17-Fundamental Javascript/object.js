var student = {
    id: 21,
    phoneNo: 233610,
    name: "Jisan"
}
var student2 = {
    id: 35,
    phoneNo: 45221,
    name: 'Shawon'
}


//3 ways to access a particular value of an object
//var phone = student.phoneNo;
//var phone = student['phoneNo'];
var phonePropName = 'phoneNo'
var phone = student[phonePropName];

student2.phoneNo = 0455542
student2['phoneNo'] = 545441

//add another key-value pair
student2.age = 16

console.log(phone);
console.log(student2);
