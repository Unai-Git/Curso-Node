//Importaciones
require("colors");
const { green } = require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("===============================".green);
    console.log("==== Seleccione una opción ====".green);
    console.log("===============================\n".green);

    console.log(`${green("1.")} Crear tarea`);
    console.log(`${green("2.")} Mostrar tareas`);
    console.log(`${green("3.")} Mostrar tareas completadas`);
    console.log(`${green("4.")} Mostrar tareas pendientes`);
    console.log(`${green("5.")} Completar tarea(s)`);
    console.log(`${green("6.")} Eliminar tarea`);
    console.log(`${green("0.")} Salir \n`);

    //Recibir información
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    //Preguntar y ver resultado
    readline.question("Seleccione una opción:", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

//Evitar que se salga del menú
const pausa = () => {
  return new Promise((resolve) => {
    //Recibir información
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    //Preguntar y ver resultado
    readline.question(`\n Pulse ${"ENTER".blue} para continuar \n`, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

//Exportar funciones
module.exports = {
  //mostrarMenu: mostrarMenu,
  mostrarMenu,
  pausa,
};
