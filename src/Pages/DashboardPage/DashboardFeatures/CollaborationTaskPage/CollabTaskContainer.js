import React, { useState, useEffect } from "react";
import CollabTaskBox from "./components/CollabTaskBox";
import CollabTaskList from "./components/CollabTaskList";
// import Pagination from "./components/Pagination";
import styles from "./CollabTaskContainer.module.css";
import Axios from "axios";
import { getCurrentWorkspace } from "../../../../services/getCurrentWorkspace";

const CollabTaskContainer = (props) => {
  const [tasks, setTasks] = useState([]);
  //For Pagination
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [tasksPerPage, setTasksPerPage] = useState(4);

  //get all tasks function
  const getTasks = () => {
    try {
      const currentWorkspace = getCurrentWorkspace();
      setLoading(true);
      Axios.post(
        // "http://localhost:4000/tasks",
        `${process.env.REACT_APP_SERVER}/tasks`,
        {
          workspaceName: currentWorkspace,
        },
        {
          headers: { "x-access-token": localStorage.getItem("token") },
        }
      ).then((res) => {
        console.log("get res from '/tasks");
        console.log(res);
        setTasks(res.data);
        // console.log(jsonData);
      });

      // setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  //Get current task
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //delete task function
  const handleDelete = async (id) => {
    try {
      // const deleteTask = await fetch(`http://localhost:4000/tasks/${id}`, {
      const deleteTask = await fetch(`${process.env.REACT_APP_SERVER}/tasks/${id}`, {
        method: "DELETE",
      });
      console.log(deleteTask);
      setTasks(
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {props.isAdmin && <CollabTaskBox users={props.users} />}
      <CollabTaskList
        tasks={currentTasks}
        handleDelete={handleDelete}
        tasksPerPage={tasksPerPage}
        totalTasks={tasks.length}
        paginate={paginate}
      />
    </div>
  );
};

export default CollabTaskContainer;
