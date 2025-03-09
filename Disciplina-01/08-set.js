
// 1. Crie um Set com os valores 1, 2 e 3.
var mySet = new Set();

mySet.add(0);
console.log(mySet);
console.log("---------")

mySet.add(1);
console.log(mySet);
console.log("---------")

mySet.add(2);
console.log(mySet);
console.log("---------")

mySet.add(2); // não adiciona
console.log(mySet);
console.log("---------")

mySet.add('A');
console.log(mySet);
console.log("---------")
