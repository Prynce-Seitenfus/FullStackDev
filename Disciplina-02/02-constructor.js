// constructor function used to create a person object
function Person(name, born, job) {
    this.name = name;
    this.born = born;
    this.job = job;
    this.age = function() {
        return new Date().getFullYear() - this.born;
    };    
};

const person1 = new Person(["John", "Doe"], 1990, "Developer");
const person2 = new Person(["Jane", "Doe"], 1995, "Designer");
console.log(person1);
console.log(person2);

// Another way to create an object using the Object constructor
const person3 = new Object();
person3.name = ["Maria", "Silva"];
person3.born = 1992;
person3.job = "Engineer";
person3.age = function() {
    return new Date().getFullYear() - this.born;
};
console.log(person3);

// Another way to create an object using the Object.create method
const person4 = Object.create(person3);
console.log(person4);

// The constructor property returns the constructor function for an object
console.log("Constructor function");
console.log(person1.constructor.name);
console.log(person2.constructor.name);
console.log(person3.constructor.name);
console.log(person4.constructor.name);

// Add a new function to the prototype
Person.prototype.WhoAreYou = function() {
    console.log("I am " + this.name + "!")
};

person1.WhoAreYou();
