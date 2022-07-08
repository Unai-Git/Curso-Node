import inquirer from "inquirer";

import colors from "colors";

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "Seleccione una opción",
    choices: [
      {
        value: "1",
        name: "1. Crear Tarea",
      },
      {
        value: "2",
        name: "2. Mostrar Tarea",
      },
      {
        value: "3",
        name: "3. Mostrar Tareas Completadas",
      },
      {
        value: "4",
        name: "4. Mostrar Tareas Pendientes",
      },
      {
        value: "5",
        name: "5. Completar Tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar Tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Seleccione una opción".green);
  console.log("===========================\n".green);

  const { opcion } = await inquirer.prompt(menuOpts);

  return opcion;
};

const pausa = async () => {
  await inquirer.prompt([
    {
      type: "confirm",
      name: "pausa",
      message: `Pulsa ${"ENTER".blue} para continuar`,
    },
  ]);
};

const leerInput = async (mensaje) => {
  const { desc } = await inquirer.prompt([
    {
      type: "input",
      name: "desc",
      message: mensaje,
      validate(value) {
        if (value.length === 0) {
          return "Ingrese un valor";
        }
        return true;
      },
    },
  ]);
  return desc;
};

const tareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, ind) => {
    return {
      value: tarea.id,
      name: `${ind} Tarea: ${tarea.desc}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "X. Cancelar".red,
  });

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices: choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message: message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

const mostrarListadoChecklist = async (tareas = []) => {
  const choices = tareas.map((tarea, ind) => {
    return {
      value: tarea.id,
      name: `${ind} Tarea: ${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    };
  });

  const preguntas = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices: choices,
    },
  ];
  const { ids } = await inquirer.prompt(preguntas);
  return ids;
};

export {
  inquirerMenu,
  pausa,
  leerInput,
  tareasBorrar,
  confirmar,
  mostrarListadoChecklist,
};
