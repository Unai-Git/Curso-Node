//Express
import { request, response } from "express";

//*GET
const userGet = (req = request, res = response) => {
  //const query = req.query;
  const {nombre= 'no name',token} = req.query;
  res.json({
    message: "GET -controller",
    nombre,
    token
  });
};

//*PUT(Actualizar)
const userPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    message: "PUT -controller",
    id,
  });
};

//*POST(Insertar)
const userPost = (req, res = response) => {
  //Parámetros para enviar
  //const body = req.body;
  const { nombre, edad } = req.body;
  res.json({
    message: "POST -controller",
    //body: body,
    nombre,
    edad,
  });
};

//*DELETE(Eliminar)
const userDelete = (req, res = response) => {
  res.json({
    message: "DELETE -controller",
  });
};

//*PATCH
const userPatch = (req, res = response) => {
  res.json({
    message: "PATCH -controller",
  });
};

export { userGet, userPut, userPost, userDelete, userPatch };
