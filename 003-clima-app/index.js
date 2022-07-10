import "dotenv/config";
import {
  inquirerMenu,
  leerInput,
  listarLugares,
  pausa,
} from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";

//Variables de entorno
//console.log(process.env);

const main = async () => {
  const busquedas = new Busquedas();
  let opt;

  do {
    //Limpiar consola
    console.clear();

    //Recuperar opción seleccionada
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //Mostrar mensaje
        const lugar = await leerInput("Ciudad: ");

        //Buscar lugar
        const lugares = await busquedas.ciudad(lugar);

        //Seleccionar el lugar
        const id = await listarLugares(lugares);
        if (id === 0) continue;

        const lugarSeleccionado = lugares.find((lugar) => lugar.id === id);
        const soloNombreArr = lugarSeleccionado.nombre.split(",");
        //Guardar en db
        busquedas.guardarHistorial(soloNombreArr[0]);

        //Datos del clima
        const clima = await busquedas.clima(
          lugarSeleccionado.lat,
          lugarSeleccionado.lon
        );

        //Mostrar resultados
        //console.clear();
        console.log("\n Información de la ciudad\n".green);
        console.log("Ciudad: " + lugarSeleccionado.nombre);
        console.log("Lat: " + lugarSeleccionado.lat);
        console.log("Lon: " + lugarSeleccionado.lon);
        console.log("Temperatura: " + clima.temp + "ºC");
        console.log("Mínima: " + clima.min + "ºC");
        console.log("Máxima: " + clima.max + "ºC");
        console.log("Descripcion: " + clima.desc);

        break;

      case 2:
        busquedas.historial.forEach((lugar, ind) => {
          console.log(`${ind + 1} Lugar: ${lugar}`);
        });
        break;

      default:
        break;
    }

    //Pausar evitar salir del menú
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
