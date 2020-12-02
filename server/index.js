const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//socket set up
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const videoIo = socket(server);

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(bodyParser.urlencoded({ extended: true }));


//routers
const taskRoutes = require('./routes/task');

//task
app.use(taskRoutes);

//video 
const video = require('./controllers/video')(videoIo)

server.listen(4000, ()=>{
    console.log("Creact server, Listening to port 4000");
})