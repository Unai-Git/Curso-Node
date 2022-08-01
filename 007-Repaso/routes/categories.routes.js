//Express
import { Router } from "express";
import { check } from "express-validator";

//Mis Archivos
import { login } from "../controllers/auth.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { crearCategoria } from "../controllers/categories.controller.js";

const categoriesRouter = Router();

categoriesRouter.get("/", (req, res) => {
  res.json({
    msg: "GET->ok",
  });
});

categoriesRouter.get("/:id", (req, res) => {
  res.json({
    msg: "GET:id->ok",
  });
});

categoriesRouter.post(
  "/",
  [validarJWT],
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  validarCampos,
  (req, res) => {
    res.json({
      msg: "POST->ok",
      crearCategoria,
    });
  }
);

categoriesRouter.put("/:id", (req, res) => {
  res.json({
    msg: "update(Put)->ok",
  });
});

categoriesRouter.delete("/:id", (req, res) => {
  res.json({
    msg: "Delete->ok",
  });
});

export { categoriesRouter };
