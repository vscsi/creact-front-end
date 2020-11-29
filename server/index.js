const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//
//Video
// const videoController = require('./videoController');
// app.use(videoController);
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const options ={
    cors:true,
    origins:["http://127.0.0.1:3000"],
  }
const io = socket(server);

// function videoController (){
  const users = {};
  
  const socketToRoom = {};
  
  io.on('connection', socket => {
      console.log('From server/index.js: io.on connection running')
      socket.on("join room", roomID => {
        console.log('From server/index.js: io.on join-room running')
          if (users[roomID]) {
              const length = users[roomID].length;
              if (length === 4) {
                  socket.emit("room full");
                  return;
              }
              users[roomID].push(socket.id);
          } else {
              users[roomID] = [socket.id];
          }
          socketToRoom[socket.id] = roomID;
          const usersInThisRoom = users[roomID].filter(id => id !== socket.id);
  
          socket.emit("all users", usersInThisRoom);
      });
  
      socket.on("sending signal", payload => {
          io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
      });
  
      socket.on("returning signal", payload => {
          io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
      });
  
      socket.on('disconnect', () => {
          const roomID = socketToRoom[socket.id];
          let room = users[roomID];
          if (room) {
              room = room.filter(id => id !== socket.id);
              users[roomID] = room;
          }
      });
  
  });

server.listen(4000, ()=>{
    console.log("Creact server, Listening to port 4000");
})