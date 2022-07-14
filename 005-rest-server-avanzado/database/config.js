//Mongoose
import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    //Establecer conexión
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log('Conectado correctamente a la base de datos');
  } catch (error) {
    throw new Error("No se pudo conectar con la base de datos.");
  }
};

export { dbConnection };
