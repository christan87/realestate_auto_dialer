const socketio = require('socket.io');

// const mongoose = require('mongoose');

// const keys = require('../config/keys');

const socket = server => {
  const io = socketio(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  const onConnection = socket => {
    support.supportHandler(io, socket);
  };

  io.on('connection', onConnection);
};

module.exports = socket;