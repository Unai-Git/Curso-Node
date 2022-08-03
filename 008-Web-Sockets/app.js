//* Importaciones Externas
require("dotenv").config();

//* Importaciones Internas
const Server = require("./models/server");

//Instanciar un obj de Server
const server = new Server();

server.listen();
