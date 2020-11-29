import React, { useState, useEffect } from "react";
import CollabTaskBox from "./components/CollabTaskBox";
import CollabTaskList from "./components/CollabTaskList";
import styles from "./CollabTaskContainer.module.css";

const CollabTaskContainer = () => {
  const [tasks, setTasks] = useState([]);

  //get all tasks function
  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:4000/tasks");
      const jsonData = await response.json();
      setTasks(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  //delete task function
  const handleDelete = async (id) => {
    try {
      const deleteTask = await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "DELETE",
      });
      console.log(deleteTask);
      setTasks(
        tasks.filter((task, index) => {
          return task.id !== id;
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <CollabTaskBox />
      <CollabTaskList tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default CollabTaskContainer;
