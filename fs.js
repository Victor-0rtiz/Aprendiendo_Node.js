const fs = require("fs");
const mensaje = "este es un mensaje para prueba fs";

// fs.writeFileSync("./pruebas_fs/prebas.txt", mensaje, { flag: "a"});
// fs.writeFile("./pruebaFS.txt", mensaje, { flag: "a" }, (err) => {
//     console.log("Exito");
//     console.log(err);

// })

// const datos= fs.readFileSync("./pruebas_fs/prebas.txt", "utf-8");
// console.log(datos);

const datosRF = fs.readFile("./pruebaFS.txt", "utf-8", (err, datos)=>{
    console.log(datos);
})

console.log(datosRF+ " asd");