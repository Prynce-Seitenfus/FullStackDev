console.log('Hello world!');
console.log('Fudamentos de computação e algoritmos');

function paridade(limite) {
    for (let i = 0; i < limite; i++) {
        if(i % 2 == 0) {
            console.log(i + ' é par');
        } else {
            console.log(i + ' é ímpar');
        }        
    }
}

paridade(10);