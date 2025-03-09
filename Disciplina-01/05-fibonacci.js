// •length: retorna o número de elementos na lista
// •push: Adiciona elemento na última posição do array
// •pop: remove o último elemento da lista
// •shift: remove o primeiro elemento da lista
// •unshift: adiciona elemento na primeira posição da lista
// •splice: adiciona valor em posição específica, permitindo remover outros
// •slice: retorna uma cópia do array
// •at(pos) ou [pos]: retorna elemento de posição especificada por pos
// •indexOf: retorna a posição de um elemento no array
// •includes: retorna true se o elemento está no array

const fibonacci = []; //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 12; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for(let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

