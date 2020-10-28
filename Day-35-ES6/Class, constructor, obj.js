//created car class 
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year
    }
}
let myCar1 = new Car('Ford', 2014);
//console.log(myCar1, myCar1.age());

//prototype methods
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    //getter
    area() {
        return this.calcArea();
    }
    //method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

//console.log(square.area());

//class of my own classStudents
class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.institute = 'NPI'
    }
}

const student1 = new Student(13, 'Jisan');
const student2 = new Student(21, 'Shawon');
const student3 = new Student(30, 'Mursalin');



console.log(student1.name, student2.name, student3);
