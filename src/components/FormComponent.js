import React, { useState, useEffect } from "react";
import firebase from "firebase";
import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

const options = [
  { key: "b", text: "Backend", value: "backend" },
  { key: "f", text: "Frontend", value: "frontend" },
  { key: "d", text: "Design", value: "design" },
];

const FormExampleFieldControl = () => {
  const [taskName, setTaskName] = useState("");
  const [team, setTeam] = useState("");
  const [urgency, setUrgency] = useState("");
  const [description, setDescription] = useState("");

  const handleTaskName = async (e, data) => {
    setTaskName(data.value);
    console.log(taskName);
  };

  const handleTeam = async (e, data) => {
    setTeam(data.value);
  };

  const handleUrgency = (e, data) => {
    setUrgency(data.value);
    console.log(urgency);
  };

  const handleDescription = (e, data) => {
    setDescription(data.value);
  };

  const createTask = () => {
    const taskRef = firebase.database().ref("Task");
    const newTask = {
      taskName: taskName,
      team: team,
      urgency: urgency,
      description: description,
      complete: false,
    };

    taskRef.push(newTask);
  };

  return (
    <Form onSubmit={createTask}>
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="Task"
          placeholder="Task Name"
          onChange={handleTaskName}
        />
        <Form.Field
          control={Select}
          label="Team"
          options={options}
          onChange={handleTeam}
          placeholder="Team"
        />
      </Form.Group>
      <Form.Group inline>
        <label>Urgency</label>
        <Form.Field
          control={Radio}
          label="High"
          value="1"
          //checked={value === "1"}
          onChange={handleUrgency}
        />
        <Form.Field
          control={Radio}
          label="Middle"
          value="2"
          //checked={value === "2"}
          onChange={handleUrgency}
        />
        <Form.Field
          control={Radio}
          label="Low"
          value="3"
          //checked={value === "3"}
          onChange={handleUrgency}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="Description"
        placeholder="Describe the task..."
        onChange={handleDescription}
      />
      <Form.Field control={Button}>Add Task</Form.Field>
    </Form>
  );
};

export default FormExampleFieldControl;
