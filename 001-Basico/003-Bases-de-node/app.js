//Limpiar consola
console.clear();

//Importar y desestructurar el obj crearArchivo.
const { crearArchivo } = require("./helpers/multiplicar");
//Importar yargs
const argv = require("./config/yargs");

//LLamar a la función para crear el archivo con la tabla de multiplicar
crearArchivo(argv.b, argv.l, argv.h)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
