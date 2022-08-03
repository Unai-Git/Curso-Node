const path = require("path");
const fs = require("fs");

//*Clase  tickets
class Ticket {
  constructor(numero, escritorio) {
    this.numero = numero;
    this.escritorio = escritorio;
  }
}

//*Clase control de tickets
class TicketControl {
  constructor() {
    this.ultimo = 0;
    this.hoy = new Date().getDate();
    this.tickets = [];
    this.ultimos4 = [];

    //LLamar a funciones
    this.init();
  }

  //Obtener los archivos del JSON (data)
  get toJson() {
    return {
      ultimo: this.ultimo,
      hoy: this.hoy,
      tickets: this.tickets,
      ultimos4: this.ultimos4,
    };
  }

  //*Funciones

  //Inicializar clase
  init() {
    const { hoy, tickets, ultimo, ultimos4 } = require("../db/data.json");
    if (hoy === this.hoy) {
      this.tickets = tickets;
      this.ultimo = ultimo;
      this.ultimos4 = ultimos4;
    } else {
      this.guardarDB();
    }
  }

  //Guardar en el data.json
  guardarDB() {
    const dbPath = path.join(__dirname, "../db/data.json");
    fs.writeFileSync(dbPath, JSON.stringify(this.toJson));
  }

  //Siguiente ticket
  siguiente() {
    this.ultimo += 1;

    const ticket = new Ticket(this.ultimo, null);
    this.tickets.push(ticket);

    this.guardarDB();
    return `Ticket: ${ticket.numero} `;
  }

  atenderTicket(escritorio) {
    //Si no hay tickets
    if (this.tickets.length === 0) {
      return null;
    }

    //Borrar y obtener un ticket
    const ticket = this.tickets.shift();
    ticket.escritorio = escritorio;

    //Añadir al principio del array ultimos 4
    this.ultimos4.unshift(ticket);

    //Comprobar que solo sean 4
    if (this.ultimos4.length > 4) {
      //Empezar posición -1(ultimo) y quitar solo 1
      this.ultimos4.splice(-1, 1);
    }

    this.guardarDB();
    return ticket;
  }
}

module.exports = TicketControl;
