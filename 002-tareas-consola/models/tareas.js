import { Tarea } from "./tarea.js";
import colors from "colors";

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];
    //Object.keys() Retorna un array con las keys
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

  cargarTareaFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    const listado = this.listadoArr;

    listado.forEach((value, ind) => {
      if (value.completadoEn == null) {
        console.log(
          `${colors.red(ind)}. ${value.desc} :::: ${colors.red("Pendiente")}`
        );
      } else {
        console.log(
          `${colors.green(ind)}. ${value.desc} :::: ${colors.green(
            "Completada"
          )}`
        );
      }
    });
  }

  pendientesCompletadas(completadas = true) {
    const listado = this.listadoArr;

    listado.forEach((value, ind) => {
      if (completadas) {
        if (value.completadoEn != null) {
          console.log(
            `${colors.green(ind)}. ${value.desc} :::: ${colors.green(
              "Completada"
            )}`
          );
        }
      } else {
        if (value.completadoEn == null) {
          console.log(
            `${colors.red(ind)}. ${value.desc} :::: ${colors.red("Pendiente")}`
          );
        }
      }
    });
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });
    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

export { Tareas };
