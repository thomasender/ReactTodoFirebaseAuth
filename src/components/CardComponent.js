import React, { useState, useReducer } from "react";
import { Card, Button } from "semantic-ui-react";
import firebase from "firebase";

function CardComponent({
  title,
  team,
  urgency,
  created,
  description,
  complete,
  id,
}) {
  const [completed, setCompleted] = useState(complete);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const updateTask = () => {
    console.log(id);
    const taskRef = firebase.database().ref(id);
    console.log(taskRef.key);
    taskRef.update({ complete: true });
    window.location.reload();
  };

  const deleteTask = () => {
    console.log(id);
    const taskRef = firebase.database().ref(id);
    taskRef.remove();
    window.location.reload();
  };

  const showcomplete = () => {
    console.log(completed);
  };

  return (
    <Card color={completed ? "green" : "red"}>
      <Card.Content header={title} />
      <Card.Content description={team} />
      <Card.Content description={description} />
      <Card.Content
        description={urgency ? `Urgency: ${urgency}` : "No urgency set"}
      />

      <Card.Content
        description={completed ? "Status: Completed" : "Status: Not completed"}
      />
      <Card.Content description={`Created: ${created}`} />
      <Card.Content>
        {completed === true ? (
          ""
        ) : (
          <Button onClick={updateTask}>Mark complete</Button>
        )}

        <Button onClick={deleteTask}>Delete Task</Button>
      </Card.Content>
    </Card>
  );
}

export default CardComponent;
