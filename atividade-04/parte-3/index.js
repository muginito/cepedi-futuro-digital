// Arividade 4 - Arrays, Objetos e Funcções

alert("Verifique os resultados no console");

// 3. Funções

// 3.1
// Soma dois números (a, b)
function soma(a, b) {
    return a + b;
}

console.log("2 + 5 = " + soma(2, 5));
console.log("10 + (-4) = " + soma(10, -4));
console.log("-16 + 15 = " + soma(-16, 15));

console.log("************");

// 3.2
// Verifica se o número x é par
function isEven(x) {
    return x % 2 == 0;
}

let n = 13;
if (isEven(n)) {
    console.log(n + " é par");
} else {
    console.log(n + " é ímpar");
}

console.log("************");

// 3.3
// Retorna o maior número em um array [arr]
function encontraMaior(arr) {
    let maior = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }

    return maior;
}

let arr = [10, 2, 32, 4, 6];

console.log("O maior número do array [" + arr + "] é " + encontraMaior(arr));

console.log("************");

// 3.4
// Retorna uma mensagem de boas-vindas com nome
function darBoasVindas(nome) {
    return "Seja bem-vindo, " + nome + "!";
}

let nome = prompt("Digite seu nome:");

console.log(darBoasVindas(nome));

console.log("************");

// 3.5
// Calula o fatorial de um número natural x

// Com recursão
function calculaFatorial(x) {
    if (x < 0) {
        return;
    }
    if (x == 0) {
        return 1;
    } return x * calculaFatorial(x - 1);
}

// Com loop
// function calculaFatorial(x) {
//     if (x < 0) {
//         return;
//     }
//
//     let fatorial = 1;
//     while (x > 1) {
//         fatorial *= x--;
//     }
//
//     return fatorial;
// }

console.log("4! = " + calculaFatorial(4));
console.log("10! = " + calculaFatorial(10));
console.log("7! = " + calculaFatorial(7));
console.log("14! = " + calculaFatorial(14));
