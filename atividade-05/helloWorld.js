export { helloWorld };

function helloWorld() {
    console.log("Olá mundo! Essa função foi exportada de helloWorld.js usando named export.");
}

export default function funcPadrao() {
    console.log("Essa função foi exportada de helloWorld.js usando default export.");
}
