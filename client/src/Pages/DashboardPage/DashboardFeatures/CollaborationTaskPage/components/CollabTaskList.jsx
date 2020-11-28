import React, { useEffect, useState } from "react";
import styles from "./CollabTaskList.module.css";

const CollabTaskList = () => {
  const [tasks, setTasks] = useState([]);

  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

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
    <div className={styles.box}>
      <h1>Task Lists</h1>
      <div className={styles.tasks}>
        {tasks.map((task, index) => {
          return (
            <div key={task.id} className={styles.task}>
              <div className={styles.task_box}>
                <h3>Task: </h3>
                <p>{task.task_name}</p>
              </div>
              <div className={styles.task_box}>
                <h3>Responsible: </h3>
                <p>{task.task_user}</p>
              </div>
              <div className={styles.task_box}>
                <h3>Deadline: </h3>
                <p>{parseISOString("" + task.task_deadline).toString()}</p>
              </div>
              <div className={styles.task_box}>
                <h3>Description: </h3>
                <p>{task.task_content}</p>
              </div>
              <div className={styles.task_box}>
                <input
                  type="button"
                  value="Finish Task"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollabTaskList;
