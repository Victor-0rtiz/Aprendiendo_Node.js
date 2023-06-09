
require("colors");
const mostrarMenu = async () => {
    return new Promise(resolve => {
        let respuesta;
        console.clear();
        console.log("======================".green);
        console.log(" Seleccione una opción ".green);
        console.log("======================".green);

        console.log(`${"1.".green} Crear tarea`);
        console.log(`${"2.".green} Listar tareas`);
        console.log(`${"3.".green} Listar tareas completadas`);
        console.log(`${"3.".green} Listar tareas pendientes`);
        console.log(`${"3.".green} Completar tarea(s)`);
        console.log(`${"3.".green} Borrar tarea`);
        console.log(`${"3.".red} Salir`);

        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question("Seleccione una opcion: ", (opt) => {
            readLine.close();
            resolve(opt);
        });
    })




}

module.exports = {
    mostrarMenu
}