//mongoose
import pkg from "mongoose";
const { Schema, model } = pkg;

const CategorySchema = Schema({
  nombre: {
    type: String,
    unique: true,
    required: [true, "El nombre es obligatorio."],
  },
  estado: {
    type: Boolean,
    default: true,
    required: [true, "El estado es obligatorio."],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "El usuario no existe."],
  },
});

const Category = model("Category", CategorySchema);

export { Category };
