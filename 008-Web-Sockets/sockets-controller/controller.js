const socketController = (socket) => {
  //console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    //console.log("Cliente desconectado");
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    //Enviar mensaje servidor
    socket.broadcast.emit("enviar-mensaje", payload);

    const id = 1234;
    callback(id);
  });
};

module.exports = { socketController };
