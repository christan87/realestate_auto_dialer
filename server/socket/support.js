exports.supportHandler = (io, socket) => {
  socket.on('disconnect', async () => {
    console.log(`socket has disconnected`);
  });

  socket.on('connect_error', err => {
    console.log(`connect_error due to ${err.message}`);
  });
};
