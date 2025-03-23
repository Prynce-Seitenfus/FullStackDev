// class aproach
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

class Grade {
    #grade;
    #caste;
    constructor(caste, grade) {
        this.#caste = caste;
        this.#grade = grade;
    };
    setGrade(grade) {
        if(grade < 0 || grade > 10) {
            throw new Error();
        }
        this.#grade = grade;
    };
    getGrade() {
        return this.#grade;
    };
    setCaste(caste) {
        this.#caste = caste;
    };
    getCaste() {
        return this.#caste;
    };
};

class Student extends Person {
    #enrollment;
    grades = [];
    constructor(name, born, enrollment) {
        super(name, born, "Student");
        this.#enrollment = enrollment;
        this.#whoAreYou();
    }
    setEnrollment(enrollment) {
        this.#enrollment = enrollment;
    };
    getEnrollment() {
        return this.#enrollment;
    };
    addGrade(caste, grade) {
        this.grades.push({caste, grade});
    };

    // overwrites the mother method
    #whoAreYou() {
        super.whoAreYou(); // using mother method
        console.log("a student of PUCRS.");
    };
};

const student1 = new Student("John", 1990, 12345);
console.log(student1.getEnrollment());
student1.grades = [new Grade("Object Oriented", 10), new Grade("Algorithms", 9), new Grade("Calculus", 8)];
student1.grades.forEach((element) => 
    console.log(element.getCaste() + " = " + element.getGrade()));
