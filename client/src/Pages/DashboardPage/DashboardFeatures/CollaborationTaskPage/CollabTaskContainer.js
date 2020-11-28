import React from "react";
import CollabTaskBox from "./components/CollabTaskBox";
import CollabTaskList from "./components/CollabTaskList";
import styles from "./CollabTaskContainer.module.css";

const CollabTaskContainer = () => {
  return (
    <div className={styles.wrapper}>
      <CollabTaskBox />
      <CollabTaskList />
    </div>
  );
};

export default CollabTaskContainer;
