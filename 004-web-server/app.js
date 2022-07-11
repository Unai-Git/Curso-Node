const express = require("express");
const app = express();
const hbs = require("hbs");

require("dotenv").config();
//Variables de entorno
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
//Middleware
//Servir contenido estático
//!Tienen prioridad sobre las rutas del app.get()
app.use(express.static("public"));

/*
app.get("/", function (req, res) {
  res.send("Inicio");
});
*/

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "unai",
    titulo: "probando hbs",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "unai",
    titulo: "probando hbs",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "unai",
    titulo: "probando hbs",
  });
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
