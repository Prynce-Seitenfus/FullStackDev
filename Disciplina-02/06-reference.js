class Person {
    constructor(name, born, job) {
        this.name = name;
        this.born = born;
        this.job = job;        
    };
    age() {
        return new Date().getFullYear() - this.born;
    };
    whoAreYou() {
        console.log("I am " + this.name);
    };
};

class Student extends Person {
    constructor(name, born, enrollment) {
        super(name, born, "Student");
        this.enrollment = enrollment;
    }
    // overwrites the mother method
    whoAreYou() {
        super.whoAreYou(); // using mother method
        console.log("a student of PUCRS.");
    };
};

class Enrollment {
    static isValid(number) {        
        return (number.toString().length == 5);
    };
};

// watchout
const student1 = new Student("John Doe", 1990, 12345);
const student2 = student1; // referencing student1
student2.born = 2000; // change student2 will change student1
console.log(student1);
console.log(student2);

// add attribute
const student3 = new Student("David", 1950, 654321);
student3.grade = 10;
student3.GrAdE = 12; // oops
console.log(student3);

// delete attribute
delete student3.GrAdE;
console.log(student3);

// static element
console.log("Does the student1 have a valid enrollment? " + Enrollment.isValid(student1.enrollment));
console.log("Does the student3 have a valid enrollment? " + Enrollment.isValid(student3.enrollment));