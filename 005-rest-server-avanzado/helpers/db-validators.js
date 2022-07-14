import { check } from "express-validator";

//Mis_Importaciones
import { User } from "../models/user.js";
import { Rol } from "../models/rol.js";
import { validarCampos } from "../middlewares/validar-campos.js";

//Comprobar si el rol es valido
const esRolValido = async (rol = "") => {
  const existeRol = await Rol.findOne({ rol });
  if (!existeRol) {
    throw new Error(
      `El rol "${rol}" no es está registrado en la base de datos.`
    );
  }
};

//Comprobar si existe el E-Mail
const esEmailValido = async (correo = "") => {
  //Verificar correo
  const existeEmail = await User.findOne({ correo });

  if (existeEmail) {
    throw new Error(`El correo "${correo}" ya esta registrado`);
  }
};

//Comprobar si el id de mongo existe
const comprobarIdMongo = async (id) => {
  //Verificar correo
  const existeId = await User.findById(id);

  if (!existeId) {
    throw new Error(`El id "${id}" no existe en la base de datos.`);
  }
};

//Arrays validator

//Para Post
const validatorPost = [
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check("contrasenia", "El pass necesita más de 6 caracteres").isLength({
    min: 6,
  }),
  check("correo", "El correo no es valido").isEmail(),
  check("correo").custom(esEmailValido),
  //check("rol", "El rol no es valido").isIn(["ADMNIN_ROL", "USER_ROL"]),
  check("rol").custom(esRolValido),
  validarCampos,
];

//Para Put
const validatorPut = [
  check("id", "No es un id de Mongo").isMongoId(),
  check("id").custom(comprobarIdMongo),
  check("rol").custom(esRolValido),
  validarCampos,
];

//Para Delete
const validatorDELETE = [
  check("id", "No es un id de Mongo").isMongoId(),
  check("id").custom(comprobarIdMongo),
  validarCampos,
];

export {
  esRolValido,
  esEmailValido,
  validatorPost,
  validatorPut,
  comprobarIdMongo,
  validatorDELETE,
};
