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

const person1 = new Person(["John", " Doe"], 1990, "Developer");

console.log(person1.age());
person1.whoAreYou();