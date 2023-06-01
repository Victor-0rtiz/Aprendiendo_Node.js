const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.render("index")

})
app.get("/normal", (req, res) => {
   res.render("saludo2")

})
app.post("/saludo", (req, res) => {
   res.send(`Hola ${req.body.name}`);

})

app.listen(3000, "localhost", () => {
   console.log("servidor en: http://localhost:3000");
})