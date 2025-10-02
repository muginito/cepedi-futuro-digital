// Atividade 5

// 1. Declaração de variáveis com let e const
console.log("1. Declaração de variáveis com let e const");

let x = 10;
const pi = 3.14;

console.log("Usando let");
console.log("x = " + x);
console.log("alterando valor...");
x += 11;
console.log("x = " + x);

console.log("Usando const")
console.log("pi = " + pi);
try {
    console.log("tentando alterar valor...");
    pi *= 6;
} catch (e) {
    console.log("Erro capturado: " + e.message);
}
console.log("pi = " + pi);

// "let" declara variáveis locais em block scope, permite reatribuição de valores mas não permite ser declarada mais de uma vez no mesmo bloco;
// "const" também declara variáveis locais em escopo de bloco, porém seu valor não pode ser alterado. Caso o valor seja um objeto, ainda é possível adicionar, alterar e remover suas propriedades;
// "var" declara variáveis em escopo global e em escopo de função. Permite reatribuição de valores assim como pode ser declarada novamente;
// Todos possuem hoisting porém variáveis com let e const não podem ser utilizadas antes de sua declaração no bloco, diferente de var.

console.log("\n*************************************************************************\n ");

// 2. Arrow Functions
console.log("2. Arrow Functions");

function sqr(a) {
    return a ** 2;
}

const sqrArrow = (a) => a ** 2;

console.log("Usando função tradicional: " + sqr(5));
console.log("Usando função arrow: " + sqrArrow(5));

const a = 10; 
const b = 7;

const somaArrow = (a, b) => a + b;
console.log("Soma usando arrow function: " + somaArrow(a,b));

console.log("\n*************************************************************************\n ");

// 3. Template literals
console.log("3. Template literals");

const nome = "Miguel";
const idade = 21;
const ocupacao = "estudante"

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos e sou ${ocupacao.toLowerCase()}.`);

console.log("\n*************************************************************************\n ");

// 4. Desestruturação (Destructuring)
console.log("4. Desestruturação");

const pessoa = {
    nome,
    idade,
    cidade: "Salvador"
};

const { nome: nomePessoa, idade: idadePessoa, cidade: cidadePessoa } = pessoa;

console.log(nomePessoa);
console.log(idadePessoa);
console.log(cidadePessoa);

console.log("\n*************************************************************************\n ");

// 5. Operador Spread e Rest
console.log("5. Operador Spread e Rest");

// Spread
const arrNumeros = [1, 2, 5, 8, 9, 12];
const copiaArrNumeros = [...arrNumeros];

// Rest
function somaRest(...args) {
    let soma = 0;
    for (let x of args) {
        soma += x;
    }
    return soma;
}

console.log(somaRest(2, 7, 21, 42));
console.log(somaRest(...arrNumeros))

console.log("\n*************************************************************************\n ");

// 6. Classes e Objetos
console.log("6. Classes e Objetos");

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos!`);
    }
}

const ronaldo = new Pessoa("Ronaldo", 37);
const miguel = new Pessoa("Miguel", 21);

ronaldo.apresentar();
miguel.apresentar();

console.log("\n*************************************************************************\n ");

// 7. Módulos (import/export)
console.log("7. Módulos (import/export)");

import { helloWorld } from "./helloWorld.js";
import defaultFunc from "./helloWorld.js"

helloWorld();
defaultFunc();

// Diferença entre default export e named export
// Default export (uso do export default) é o valor padrão que será exportado pelo módulo. Essa forma também permite que valores não nomeados sejam exportados.
// Named export (uso do export) são valores exportados e que devem ser nomeados em seu módulo.
// Em um módulo podem haver múltiplos named exports mas somente um default export.
