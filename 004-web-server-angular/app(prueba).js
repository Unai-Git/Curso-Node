const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    const persona = {
      id: 1,
      nombre: "Unai",
    };
    response.write(JSON.stringify(persona));

    response.end();
  })
  .listen(8080);

console.log("Escuchando el puerto 8080");

/*
// Se carga el módulo de HTTP
var http = require("http");

// Creación del servidor HTTP, y se define la escucha
// de peticiones en el puerto 8000
http.createServer(function(request, response) {

   // Se define la cabecera HTTP, con el estado HTTP (OK: 200) y el tipo de contenido
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World"
   response.end('Hola Mundo!\n');
}).listen(8000);

// Se escribe la URL para el acceso al servidor
console.log('Servidor en la url http://127.0.0.1:8000/');

*/