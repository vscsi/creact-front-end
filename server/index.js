const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const socketio = socket(server);
//Video
const videoIo = require('./controllers/video')(socketio)
    
server.listen(4000, ()=>{
    console.log("Creact server, Listening to port 4000");
})