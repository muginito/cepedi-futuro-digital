// Atividade 3 - Loops e Condicionais

// 2. Switch Case

// 2.1 Dias da Semana

let dia = Number(prompt("Digite um número de 1 a 7:"));

alert("Dia da semana correspondente a " + dia);
switch (dia) {
    case 1:
        alert("Domingo");
        break;
    case 2:
        alert("Segunda");
        break;
    case 3:
        alert("Terça");
        break;
    case 4:
        alert("Quarta");
        break;
    case 5:
        alert("Quinta");
        break;
    case 6:
        alert("Sexta");
        break;
    case 7:
        alert("Sábado");
        break;
    default:
        alert("Número inválido");
        break;
}

// 2.2 Categorizando notas

let nota = Number(prompt("Digite uma nota:"));

switch (nota) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        alert(`Nota ${nota}: Insuficiente`);
        break;
    case 5:
    case 6:
        alert(`Nota ${nota}: Regular`);
        break;
    case 7:
    case 8:
        alert(`Nota ${nota}: Bom`)
        break;
    case 9:
    case 10:
        alert(`Nota ${nota}: Ótimo`)
        break;
    default:
        alert("Nota inválida!")
        break;
}

// 2.3 Preço das frutas

let fruta = prompt("Digite uma fruta:");

switch (fruta) {
    default:
        alert("Fruta fora de estoque ou nome inválido!");
        break;
    case "Banana":
        alert("Banana custa R$ 4,60 o quilo");
        break;
    case "Maçã":
        alert("Maçã custa R$ 6,40 o quilo");
        break;
    case "Limão":
        alert("Limão custa R$ 3,50 o quilo");
        break;
    case "Uva":
        alert("Uva custa R$ 30,00 o quilo");
        break;
}

// 2.4 Dias do mês

let mes = Number(prompt("Digite um número de 1 a 12:"));

alert("Mês correspondente a " + mes);
switch (mes) {
    case 1:
        alert("Janeiro");
        break;
    case 2:
        alert("Fevereiro");
        break;
    case 3:
        alert("Março");
        break;
    case 4:
        alert("Abril");
        break;
    case 5:
        alert("Maio");
        break;
    case 6:
        alert("Junho");
        break;
    case 7:
        alert("Julho");
        break;
    case 8:
        alert("Agosto");
        break;
    case 9:
        alert("Setembro");
        break;
    case 10:
        alert("Outubro");
        break;
    case 11:
        alert("Novembro");
        break;
    case 12:
        alert("Dezembro");
        break;
    default:
        alert("Número inválido");
        break;
}

// 2.5 Menu de lanchonete

let opt = 0;
do {
    opt = Number(prompt("Menu da lanchonete Rangra I\n\n \
    1 - Hambúrgueres\n \
    2 - Salgados\n \
    3 - Sucos\n \
    4 - Sair\n"));

    switch (opt) {
        case 1:
            alert("HAMBÚRGUERES\n\nRangrão\nX-Bacon\nX-Eggburguer\nX-Calaburguer\n");
            break;
        case 2:
            alert("SALGADOS\n\nCoxinha\nBauru\nEmpada\n");
            break;
        case 3:
            alert("SUCOS\n\nAbacaxi\nManga\nMangaba\nGoiaba\nLimão\nSiriguela");
            break;
    }
} while (opt != 4);
