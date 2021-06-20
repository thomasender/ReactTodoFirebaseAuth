import React, { useState, useEffect } from "react";

import firebase from "firebase";
import CardComponent from "./CardComponent";
import { Button } from "semantic-ui-react";

const TaskComponent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const array = [];
      try {
        const tasksRef = firebase.database().ref();
        tasksRef.on("value", async (snapshot) => {
          const data = await snapshot.val();
          // console.log("DTA", data);
          if (data) {
            Object.keys(data).forEach((key, i) => {
              const task = {
                id: data[key].id,
                complete: data[key].complete,
                description: data[key].description,
                created: data[key].created,
                team: data[key].team,
                taskName: data[key].taskName,
                urgency: data[key].urgency,
              };
              array.push(task);
            });
            setTasks(array);
            console.log("ARRA", array);
          }
        });
      } catch (error) {
        console.error(error.message);
      }
    }
    getTasks();
  }, []);

  return (
    <>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, i) => {
          console.log("TASKID", task.id);
          return (
            <CardComponent
              id={task.id}
              key={task.id}
              title={task.taskName}
              team={task.team}
              urgency={task.urgency}
              description={task.description}
              created={task.created}
              complete={task.complete}
            />
          );
        })
      ) : (
        <p>"No tasks in the database."</p>
      )}
    </>
  );
};

export default TaskComponent;
