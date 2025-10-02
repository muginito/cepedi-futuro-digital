// 4. setTimeout e setInterval
//
let i = 1;
const contador = setInterval(() => console.log(i++), 1000);
setTimeout(() => clearInterval(contador), 5000);
setTimeout(() => console.log("Tempo esgotado!"), 3000);
