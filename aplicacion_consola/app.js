require("colors");
const {mostrarMenu} = require("./helpers/mensajes.js");
const main = async () => {
    const opt ="";
   do {
    const respuesta = await mostrarMenu();
    opt = respuesta;

   console.log(respuesta, "Desde mensaje");
   } while (opt != "0");

}
main();