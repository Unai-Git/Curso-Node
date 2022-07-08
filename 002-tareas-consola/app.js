import {
  inquirerMenu,
  pausa,
  leerInput,
  tareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} from "./helpers/inquirer.js";
import { Tareas } from "./models/tareas.js";
import { guardarArchivo, leerArchivo } from "./helpers/guardarArchivo.js";

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerArchivo();

  if (tareasDB) {
    tareas.cargarTareaFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);

        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.pendientesCompletadas(true);
        break;
      case "4":
        tareas.pendientesCompletadas(false);
        break;
        case "5":
         const ids = await mostrarListadoChecklist(tareas.listadoArr);
         tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await tareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("¿Está seguro?");

          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea eliminada");
          }
        }
        break;
    }

    guardarArchivo(tareas.listadoArr);

    if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
