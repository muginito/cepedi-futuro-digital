// 2. Promises
//
function processarUsuario(usr) {
    const promiseUsuario = new Promise(function (resolve, reject) {
        (usr != undefined) ? setTimeout(() => resolve("Usuário encontrado: " + usr), 2000) : setTimeout(() => reject("Usuário não encontrado."), 2000);
    });
    return promiseUsuario
}

// processarUsuario("Leo").then(
//     function(value) {console.log(value)},
//     function(error) {console.log(error)}
// );

processarUsuario().then(
    function (value) { console.log(value) }
).catch(
    function (error) { console.log(error) }
);
