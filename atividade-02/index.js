// Algoritmos com JavaScript

// 1. Declaração de Variáveis

let idade = 21;
const nome = "Miguel";
let estudante = true;

// Exibição de valores no console
console.log(idade);
console.log(nome);
console.log(estudante);

// Alteração de valor da variável
idade = 15;
console.log(idade);

// 2. Testando Tipos de Dados

// Uso do typeof para verificar o tipo da variável
console.log(typeof idade);
console.log(typeof nome);
console.log(typeof estudante);

// Número em formato de String
numero = "12"
console.log(typeof numero);

// 3. Operadores Aritméticos

let n1 = 20;
let n2 = 45;

let soma = n1 + n2;
let sub = n1 - n2;
let mult = n1 * n2;
let exp = n1 ** n2
let div = n1 / n2;
let mod = n1 % n2;

// Mensagem exibindo os resultados das operações com as variáveis n1 e n2
let msgAritmetica = `Operadores Aritiméticos:\n
n1 + n2 = ${soma}\n
n1 - n2 = ${sub}\n
n1 * n2 = ${mult}\n
n1 ** n2 = ${exp}\n
n1 / n2 = ${div}\n
n1 % n2 = ${mod}`;
console.log(msgAritmetica);

// 4. Operadores Relacionais

console.log("Operadores Relacionais:");
console.log("> : ", n1 > n2);
console.log("< : ", n1 < n2);
console.log(">= : ", n1 >= n2);
console.log("<= : ", n1 <= n2);
console.log("== : ", n1 == n2);
console.log("=== : ", n1 === n2);

console.log("'==' desconsidera o tipo\n'===' considera o tipo");

//5. Operadores Lógicos

console.log("Operadores Lógicos:");
console.log("true && true == ", true && true);
console.log("true && false == ", true && false);
console.log("true || false == ", true || false);
console.log("false || false == ", false || false);
console.log("!false == ", true);

let p = true;
let q = false;

console.log((p || !q) || !(!q && !p));

