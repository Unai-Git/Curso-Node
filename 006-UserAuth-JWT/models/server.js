//*Importaciones de terceros
//Express
import express from "express";
//CORS
import cors from "cors";
//*Mis_Importaciones
//Routes
import { userRouter } from "../routes/user.routes.js";
import { authRouter } from "../routes/auth.routes.js";
//Conexión
import { dbConnection } from "../database/config.js";

//Clase Server
class Server {
  constructor() {
    //Es igual que declarar una variable en la clase y
    //asignar valor en el constructor, todo en un solo paso.
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/users";
    this.authPath = "/api/auth";

    //Conectar a la base de datos
    this.conectarBD();

    //Middleware
    this.middleware();

    //Rutas
    this.routes();
  }
  async conectarBD() {
    await dbConnection();
  }

  middleware() {
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userPath, userRouter);
    this.app.use(this.authPath, authRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor ejecutándose en el puerto " + this.port);
    });
  }
}

export { Server };
