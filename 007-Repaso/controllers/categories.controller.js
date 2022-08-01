import { response } from "express";

import { Category } from "../models/category.js";

const crearCategoria = async (req, res = response) => {
  const nombre = req.body.nombre.toUpperCase();
  console.log("-------------------");
  const categoriaDB = await Category.find({ nombre });

  if (categoriaDB) {
    return res.status(400).json({
      msg: `La categoria: ${categoriaDB.nombre} ya existe.`,
    });
  }

  //Grabar data
  const data = {
    nombre,
    user: req.user._id,
  };

  const category = new Category(data);
  console.log("-------------------");
  console.log(category);

  await category.save();

  res.status(200).json(category);
};

export { crearCategoria };
