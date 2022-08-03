//URL http://localhost:8080/socket.io/socket.io.js

//HTML Refs
const online = document.querySelector("#online");
const offline = document.querySelector("#offline");
const text = document.querySelector("#text");
const btn_enviar = document.querySelector("#btn_enviar");

//Socket
const socket = io();

socket.on("connect", () => {
  offline.style.display = "none";
  online.style.display = "inline";
});

socket.on("disconnect", () => {
  offline.style.display = "inline";
  online.style.display = "none";
});

socket.on("enviar-mensaje", (payload) => {
    console.log(payload);
  });

btn_enviar.addEventListener("click", () => {
  const mensaje = text.value;
  const payload = {
    mensaje,
    id: 1234,
    fecha: new Date(),
  };

  //Enviar evento al servidor
  socket.emit("enviar-mensaje", payload, (id)=>{
    console.log('desde el server:', id);
  });
});
