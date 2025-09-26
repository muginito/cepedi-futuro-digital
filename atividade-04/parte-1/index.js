// Arividade 4 - Arrays, Objetos e Funcções

// 1. Arrays

alert("Verifique os resultados no console")

// 1.1
// Exibir elementos de um array

const arrNomes = ["Leo", "Xico", "Marlon", "Matheu", "Bill"];

console.log("Array com 5 nomes");
for (let i of arrNomes) {
    console.log(i);
}

console.log("************");

// 1.2
// Exibir os números pares de um array numérico

const arrNumeros = [1, 7, 22, 4, 5, 3, 10, 25, 103, 42];

console.log(`Números pares do array [${arrNumeros}]`);
for (let i of arrNumeros) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("************");

// 1.3
// Soma dos elementos de um array numérico

const arrNumSoma = [5, 24, 60, 43, 21, 2.4, 25, 9, 12, 76];
let soma = 0;

console.log(`Soma dos elementos de [${arrNumSoma}]`);

for (let i of arrNumSoma) {
    soma += i;
}

console.log(soma);

console.log("************");

// 1.4
// Busca nome no array desconsiderando o maiúsculas e minúsculas

const busca = prompt("Buscar nome:");

console.log("Buscando por: " + busca);

/*
 * Usando map() para cirar um array com os elementos em lower case e usando includes() para
 * descobrir se o elemento buscado se encontra no array
 */
// arrNomes.map((nome) => nome.toLowerCase()).includes(busca.toLowerCase()) ?
//     console.log(`${busca} foi encontrado`) :
//     console.log(`${busca} não foi encontrado`);

// Usando método some()
// arrNomes.some((nome) => nome.toLowerCase() === busca.toLowerCase()) ?
//     console.log(`${busca} foi encontrado`) :
//     console.log(`${busca} não foi encontrado`);

// Forma mais manual 
for (let i = 0; i < arrNomes.length; i++) {
    if (busca.toLowerCase() === arrNomes[i].toLowerCase()) {
        console.log(`${busca} foi encontrado!`);
        break;
    } else if (i == arrNomes.length - 1){
        console.log(`${busca} não foi encontrado!`);
    }
}

console.log("************");

// 1.5
// Inverter a ordem dos elementos de um array

console.log(`Array original [${arrNumeros}]`);

let arrNumerosReverso = [];
for (let i = arrNumeros.length - 1; i >= 0; i--) {
    arrNumerosReverso.push(arrNumeros[i]);
}
console.log(`Array invertido [${arrNumerosReverso}]`)

// Invertendo array utilizando o método toReversed()
// console.log(`Array invertido [${arrNumeros.toReversed()}]`);

console.log("************");

