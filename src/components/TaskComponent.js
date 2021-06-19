import React, { useState, useEffect } from "react";

import firebase from "firebase";
import CardComponent from "./CardComponent";
import { Button } from "semantic-ui-react";

const TaskComponent = () => {
  const [tasks, setTasks] = useState({});
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const tasksRef = firebase.database().ref("Task");
      await tasksRef.on("value", async (snapshot) => {
        const data = snapshot.val();
        setTasks(data);
      });
    }
    getTasks();
    showTask();
  }, []);

  function showTask() {
    console.log(tasks);
  }

  return (
    <>
      {/* {Object.keys(tasks).forEach((key) => (
        <CardComponent title={key} />
      ))} */}
      <CardComponent title="Test" />
      <Button onClick={showTask}>Fetch</Button>
    </>
  );
};

export default TaskComponent;
