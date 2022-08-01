//Express
import { response } from "express";
import { User } from "../models/user.js";
import { generarJWT } from "../helpers/generar-jwt.js";
//bcryptjs
import bcryptjs from "bcryptjs";

const login = async (req, res = response) => {
  const { correo, contrasenia } = req.body;

  try {
    //Verificar si el correo existe
    const user = await User.find({ correo });

    if (!user) {
      return res.status(400).json({
        msg: "Correo no existe",
      });
    }
    //Verificar si el usuario esta activo
    if (user.estado === false) {
      return res.status(400).json({
        msg: "Usuario no existe",
      });
    }

    //Verificar la contraseña
    /*
    const validPass =  bcryptjs.compareSync(contrasenia, user.contrasenia);
    if (!validPass) {
      return res.status(400).json({
        msg: "Pass no existe",
      });
    }
    */
    //Generar JWT
    const token = await generarJWT(user.id);

    res.json({
      msg: "login Ok",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Algo salio mal " + error,
    });
  }
};

export { login };
