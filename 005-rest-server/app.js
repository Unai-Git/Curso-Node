//Importaciones de terceros
//Dotenv
import "dotenv/config";

//Mis_Importaciones
import { Server } from "./models/server.js";

//Instancias
const server = new Server();

//LLamadas
server.listen();
