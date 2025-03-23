let a = [1, 2, 3];
let i = a.findIndex(function(item) {
    return item >= 2;
});

let e = a.findIndex(function(item) {
    return item >= 0 && item <= 2;
});

a.forEach(function(item, index) {
    console.log(`${item} na posição ${index}`);
});

