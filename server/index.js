const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES//
//Create task
app.post("/task", async (req, res) => {
  try {
    const { taskName, taskContent, taskDeadline, taskUser } = req.body;
    console.log(req.body);
    await db("task").insert({
      task_name: taskName,
      task_content: taskContent,
      task_deadline: taskDeadline,
      task_user: taskUser,
    });
    res.send("Data has inserted into table");
  } catch (error) {
    console.error(error.message);
  }
});

//Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await db
      .select("id", "task_name", "task_content", "task_deadline", "task_user")
      .from("task")
      .orderBy("task_deadline");
    console.log("get tasks from db");
    console.log(allTasks);
    res.json(allTasks);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await db("task").where("id", id).del();
    res.json("Task is deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(4000, () => {
  console.log("Creact server, Listening to port 4000");
});
