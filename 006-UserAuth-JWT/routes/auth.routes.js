//Express
import { Router } from "express";
import { check } from "express-validator";

import { login } from "../controllers/auth.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
const authRouter = Router();

authRouter.post(
  "/login",
  [
    check("correo", "El correo es obligatorio").isEmail(),
    check("contrasenia", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  login
);


export { authRouter };
