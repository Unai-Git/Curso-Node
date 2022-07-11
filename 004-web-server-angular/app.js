const express = require("express");
const app = express();


require("dotenv").config();
//Variables de entorno
const port = process.env.PORT;


//Servir contenido estático
//!Tienen prioridad sobre las rutas del app.get()
app.use(express.static("public"));


app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

/*
app.get("/saludo", function (req, res) {
  res.send("Hello World");
});

app.get("/generic", function (req, res) {
    res.sendFile(__dirname + "/public/generic.html");
  });

  app.get("/elements", function (req, res) {
    res.sendFile(__dirname + "/public/elements.html");
  });

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});
*/
app.listen(port);
console.log("Escuchando por el puerto 8080");
