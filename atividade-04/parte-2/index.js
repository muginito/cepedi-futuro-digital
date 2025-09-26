// Arividade 4 - Arrays, Objetos e Funcções

// 2. Objetos

alert("Verifique os resultados no console");

// 2.1

let pessoa = {nome: "Miguel", idade: 21, profissao: "Estudante"};

console.log(pessoa);

console.log("************");

// 2.2

let carro = {
    modelo: "civic",
    ano: 2014,
    cor: "vermelho",
    mostraCarro() {
        console.log("Especificações do carro:");
        console.log(this.modelo);
        console.log(this.ano);
        console.log(this.cor);
    }
};

carro.mostraCarro();

console.log("************");

// 2.3

const arrAlunos = [
    {nome: "Miguel",  nota: 10},
    {nome: "João",    nota: 5},
    {nome: "Maria",   nota: 8.5},
    {nome: "Rafael",  nota: 7},
    {nome: "Leandro", nota: 10},
    {nome: "Alice",   nota: 4},
    {nome: "Jonas",   nota: 7.2}
];

console.log("Alunos com nota maior ou igual a 7");
console.log("Aluno | Nota");
for (let aluno of arrAlunos) {
    if (aluno.nota >= 7) {
        console.log(`${aluno.nome} | ${aluno.nota}`)
    }
}

console.log("************");

// 2.4

let conta = {
    nome: "Jairo",
    idade: 23
};

console.log(conta);

conta.endereco = "Rua JavaScript, 123";
console.log("Adicionando endereço..");

console.log(conta);

console.log("************");

// 2.5

const produto = {
    nome: "Clear Men do Cristiano Ronaldo",
    preco: 27.7,
    qtd: 7,
    calculaValorTotal() {
        return this.preco * this.qtd;
    }
}

console.log(`Valor total do produto em estoque: R$ ${produto.calculaValorTotal().toFixed(2)}`);

console.log("************");
