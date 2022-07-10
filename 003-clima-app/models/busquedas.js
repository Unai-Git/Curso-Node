import axios from "axios";
import fs, { readFileSync } from "fs";

class Busquedas {
  historial = [];
  dbPath = "./db/database.json";

  constructor() {
    this.leerDB();
  }

  get mapParams() {
    return {
      key: process.env.LOCATIONIQ_TOKEN,
      "accept-language": "es",
      format: "json",
    };
  }
  get climaParams() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
      lang: "es",
    };
  }

  //Clima
  async clima(lat = "", lon = "") {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`,
        params: this.climaParams,
        //params: {...this.cimaParams, lat, lon}
      });

      //Llamada a la API del clima
      const resp = await instance.get();

      //Retornar los datos
      const { weather, main } = resp.data;
      return {
        temp: main.temp,
        max: main.temp_max,
        min: main.temp_min,
        desc: weather[0].description,
      };
    } catch (error) {
      return console.log(error);
    }
  }

  //Ubicación
  async ciudad(lugar = "") {
    try {
      //Petición HTTP
      const instance = axios.create({
        baseURL: `https://us1.locationiq.com/v1/search.php?q=${lugar}`,
        params: this.mapParams,
      });

      //Llamada HTTP LocationIQ
      const resp = await instance.get();

      //Return de el lugar con los datos que queremos
      return resp.data.map((lugar) => ({
        id: lugar.place_id,
        nombre: lugar.display_name,
        lat: lugar.lat,
        lon: lugar.lon,
      }));
    } catch (error) {
      return console.log(error);
    }
  }

  //Historial

  guardarHistorial(lugar = "") {
    //Evitar duplicados
    if (this.historial.includes(lugar.toLocaleLowerCase())) {
      return;
    }
    this.historial.unshift(lugar.toLocaleLowerCase());

    //Guardar en DB
    this.guardarDB();
  }

  guardarDB() {
    const payload = {
      historial: this.historial,
    };
    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  leerDB() {
    if (!fs.existsSync(this.dbPath)) {
      return;
    }

    const info = fs.readFileSync(this.dbPath, { encoding: "utf-8" });
    //Deserializar parsear el string a json
    const data = JSON.parse(info);
    this.historial = data.historial;
  }
}

export { Busquedas };
