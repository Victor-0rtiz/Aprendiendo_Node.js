const sqlite = require("sqlite3"); //imortar sqlite3
const express = require("express");
const bodyParser = require("body-parser"); //bodyparser para el post
const sequilize = require("sequelize");

const app = express(); //inicializar express

app.use(bodyParser.urlencoded({ extended: true})); //middleware de bodyparser para el post 

// const db = new sqlite.Database("prueba_sqlite"); //crea una instancia de la db

//forma de conectarse con un orm como sequelize
const dbs = new sequilize("prueba_sqlite", null, null,{
    dialect: "sqlite",
    storage: "./prueba_sqlite"
})

app.post("/pendientes",(req, res)=>{
    // db.run('INSERT INTO prueba(descripcion) VALUES("Hola mundo desde sqlite")')  //insercion en la db
    db.run('INSERT INTO prueba(descripcion) VALUES(?)', req.body.descripcion); //insercion en la db con datos sanitizados
    res.send("Insertado con sanitizacion")
})

//con este script se corre una instruccion sql
// db.run("CREATE TABLE prueba(id int AUTO_INCREMENT, descripcion varchar(255))");


process.on("SIGINT",()=>{
    console.log("Servidor cerrado");
    db.close();
    process.exit();
})


app.listen(3000, "localhost", ()=>{ console.log("server corriendo en http://localhost:3000");})