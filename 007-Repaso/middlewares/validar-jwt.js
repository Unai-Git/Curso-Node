import { response } from "express";
import jwt from "jsonwebtoken";
const { verify } = jwt;

import { User } from "../models/user.js";

const validarJWT = async (req, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token",
    });
  }

  try {
    //Verificar json web token
    const { _id } = verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(_id);

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      msg: "Token no válido.",
    });
  }
};

export { validarJWT };
