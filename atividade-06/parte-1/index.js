// 1. Callbacks
//
function processarUsuario(usr, callback) {
    setTimeout(() => callback("Usuário encontrado: " + usr), 2000);
}

processarUsuario("Miguel", console.log);
