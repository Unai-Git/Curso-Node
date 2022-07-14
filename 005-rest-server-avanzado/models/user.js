//mongoose
import pkg from "mongoose";
const { Schema, model } = pkg;

/*
Base de datos NoSQL, orientado a documentos.
MongoDb se guarda en objetos.
*/
const userSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  contrasenia: {
    type: String,
    required: [true, "El pass es obligatorio"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: [true, "El rol es obligatorio"],
    //enum: ["ADMNIN_ROL", "USER_ROL"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

//Ocultar la version y la pass
userSchema.methods.toJSON = function () {
  const { __v, contrasenia, ...user } = this.toObject();
  return user;
};

//El nombre en singular Mongo lo cambia a plural
const User = model("User", userSchema);

export { User };
