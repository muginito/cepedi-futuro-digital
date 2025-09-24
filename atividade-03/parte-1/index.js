// Atividade 3 - Loops e Condicionais

// 1. Condicionais e Loops

alert("Cheque o console para ver os resultados.");

// 1.1 Positivos, negativos ou zero

let numero = prompt("Digite um número:");
console.log("1.1 Positivos, negativos ou zero");
if (numero > 0) {
    console.log(numero + " é positivo"); 
} else if (numero < 0) {
    console.log(numero + " é negativo"); 
} else {
    console.log(numero + " é zero");
}

console.log("*****************");

// 1.2 Categoria idade

let idade = prompt("Digite sua idade:");
console.log("1.2 Categoria idade");
console.log(idade + " anos");
if (idade >= 60){
    console.log("Você é idosa");
} else if (idade >= 18){
    console.log("Você é adulta");
} else if (idade >= 13) {
    console.log("Você é adolescente");
} else if (idade >= 0) {
    console.log("Você é criança");
} else console.log("Erro! Idade inválida")

console.log("*****************");

// 1.3 Tabuada

let numTabuada = Number(prompt("Digite um número:"));
console.log("1.3 Tabuada do " + numTabuada);
for (let i = 1; i <= 10; i++) {
    console.log(i + "  x  " + numTabuada + "  =  " + (i * numTabuada));
}

console.log("*****************");

// 1.4 Números pares entre 1 e 50

console.log("NÚMERO PARES (1-50)");
console.log("1.4 Números pares entre 1 e 50");
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("*****************");

// 1.5 Soma de um número e todos seus antecessores naturais

let num = prompt("Digite um número:");
console.log("1.5 Soma de um número e todos seus antecessores naturais");
let soma = 0;
while (num > 0) {
    soma += num--;
}
console.log(soma);
