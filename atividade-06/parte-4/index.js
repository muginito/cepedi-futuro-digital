// 4. setTimeout e setInterval
//
// let i = 1;
// const contador = setInterval(() => console.log(i++), 990);
// setTimeout(() => {
//     clearInterval(contador);
//     setTimeout(() => console.log("Tempo esgotado!"), 3000);
// }, 5000);

// Função que recebe tempo em segundos
function contador(tempo) {
    let i = 0;
    const interval = setInterval(() => console.log(++i), 990);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => console.log("Tempo esgotado!"), 3000);
    }, (tempo * 1000));
}

contador(5);


// OBS: Colocando o delay do setInterval em 1000 (ms), notei que o contador só mostra
// o número anterior ao valor do delay em segundos. Diminuindo o delay para 999 o resultado passou a
// variar entre o número correto e o seu anterior. Então, coloquei o delay em 990 para garantir.
// Outra solução seria atrasar o timeout.
// TESTADO NO FIREFOX
