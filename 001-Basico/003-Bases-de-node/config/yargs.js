const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "La base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Mostrar la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "Limite de la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b && argv.h)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;

//console.log(argv);
//console.log("base:yargs", argv.base);

//Argumentos de la terminal
//* process.argv => Devuelve un array con la ruta de node, del proyecto y parámetros insertados
/*
const [, , arg3 = "base=4"] = process.argv;
const [, base = 0] = arg3.split("=");
console.log(base);
*/
