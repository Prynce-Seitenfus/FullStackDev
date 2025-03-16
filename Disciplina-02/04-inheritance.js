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
}

const student1 = new Student("John Doe", 1990, 12345);
console.log(student1);