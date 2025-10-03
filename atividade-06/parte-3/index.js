// 3. Async/Await
//
function processarUsuario(usr) {
    const promiseUsuario = new Promise(function (resolve, reject) {
        (usr != undefined) ? setTimeout(() => resolve("Usuário encontrado: " + usr), 2000) : setTimeout(() => reject("Usuário não encontrado."), 2000);
    });
    return promiseUsuario
}

async function buscarUsuario(usr) {
    console.log("Buscando usuário...");
    try {
        const resultado = await processarUsuario(usr);
        console.log(resultado);
    } catch (e) {
        console.log(e);
    }
}

// buscarUsuario();
buscarUsuario("Miguel");
