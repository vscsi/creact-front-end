const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(bodyParser.urlencoded({ extended: true }));

//routers
const taskRoutes = require('./routes/task')

//app use
app.use(taskRoutes);

//listen to port
app.listen(4000, () => {
  console.log("Creact server, Listening to port 4000");
});
