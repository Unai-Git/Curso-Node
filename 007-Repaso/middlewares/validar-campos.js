//Express
import { validationResult } from "express-validator";

const validarCampos = (req, res, next) => {
  //Express Validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors,
    });
  }
  //Si todo va bien continua con el siguiente middleware o controlador
  next();
};

export { validarCampos };
