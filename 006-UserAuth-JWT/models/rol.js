//mongoose
import pkg from "mongoose";
const { Schema, model } = pkg;

const RolSCHEMA = Schema({
  rol: {
    type: String,
    required: [true, "El rol es obligatorio."],
  },
});

const Rol = model("Rol", RolSCHEMA);

export { Rol };
