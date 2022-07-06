//Importar File System
const fs = require("fs");
//Importar colors
const colors = require("colors");

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
  return new Promise((resolve, reject) => {
    let salida = "";
    //Bucle multiplicación
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    //Imprimir
    fs.writeFileSync(`./salida/Tabla-${base}x${hasta}.txt`, salida);
    resolve("Archivo creado");
    reject("No se puede crear el archivo");

    //Listar por pantalla
    if (listar) {
      console.log("Tabla de multiplicar".bgWhite.green);
      console.log(colors.rainbow(salida));
    }
  });
};

//Exportar
module.exports = {
  //crearArchivo: crearArchivo,
  crearArchivo,
};

//* Otras Formas
//(ruta,datos,callback)
/*
fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
  if (err) throw "No se puede grabar el archivo";

  console.log("Archivo creado");
});

try {
    fs.writeFileSync(`Tabla-${base}.txt`, salida);
    console.log("Archivo creado");
  } catch (error) {
    if (error) throw "No se puede grabar el archivo";
  }


const crearArchivo = async(base = 5) => {
  return new Promise((resolve, reject) => {
    let salida = "";
    //Bucle multiplicación
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    //Imprimir
    fs.writeFileSync(`Tabla-${base}.txt`, salida);
    return "Archivo creado";
  });
};
*/
