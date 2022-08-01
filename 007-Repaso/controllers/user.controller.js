//Express
import { request, response } from "express";

//bcryptjs
import bcryptjs from "bcryptjs";

//Mis_Importaciones
import { User } from "../models/user.js";

//*GET
const userGet = async (req = request, res = response) => {
  //const query = req.query;
  //const { nombre = "no name", token } = req.query;

  /*
  req.query ==> url/?id=1&name=user
  req.params ==> url/param1/param2/param3
  */
  /*
  const { since = 0, limit = 5 } = req.query;
  const users = await User.find({ estado: true })
    .skip(Number(since))
    .limit(Number(limit));

  const total = await User.countDocuments({ estado: true });
*/
  const { since = 0, limit = 5 } = req.query;

  //Ejecutar promesas simultaneas
  const [users, total] = await Promise.all([
    User.find({ estado: true }).skip(Number(since)).limit(Number(limit)),
    User.countDocuments({ estado: true }),
  ]);

  res.json({
    message: "GET -controller",
    users,
    total,
  });
};

//*PUT(Actualizar)
const userPut = async (req, res = response) => {
  //const id = req.params.id;
  const { id } = req.params;
  const { _id, contrasenia, google, correo, ...rest } = req.body;

  if (contrasenia) {
    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    rest.contrasenia = bcryptjs.hashSync(contrasenia, salt);
  }

  const user = await User.findByIdAndUpdate(id, rest, { new: true });

  res.json({
    message: "PUT -controller",
    user,
  });
};

//*POST(Insertar)
const userPost = async (req, res = response) => {
  const { nombre, correo, contrasenia, rol } = req.body;
  const user = new User({ nombre, correo, contrasenia, rol });

  //Encriptar contraseña
  const salt = bcryptjs.genSaltSync();
  user.contrasenia = bcryptjs.hashSync(contrasenia, salt);

  //Guardar datos en Mongo
  await user.save();

  res.json({
    user,
  });
};

//*DELETE(Eliminar)
const userDelete = async (req, res = response) => {
  //Cambiar estado para "OCULTARLO"
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(id, { estado: false });
  const userAuth = req.user;
  //Eliminar físicamente (definitivo)
  //const user = await User.findByIdAndDelete(id);

  res.json({
    message: "DELETE -controller",
    user,
    userAuth,
  });
};

//*PATCH
const userPatch = (req, res = response) => {
  res.json({
    message: "PATCH -controller",
  });
};

export { userGet, userPut, userPost, userDelete, userPatch };
