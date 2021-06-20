import React, { useState, useEffect } from "react";
import firebase from "firebase";
import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Message,
  Label,
} from "semantic-ui-react";

const options = [
  { key: "b", text: "Backend", value: "Backend" },
  { key: "f", text: "Frontend", value: "Frontend" },
  { key: "d", text: "Design", value: "Design" },
];

const FormExampleFieldControl = () => {
  const [taskName, setTaskName] = useState("");
  const [team, setTeam] = useState("");
  const [urgency, setUrgency] = useState("");
  const [description, setDescription] = useState("");
  const [didWrite, setDidWrite] = useState(true);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleTaskName = async (e, data) => {
    setTaskName(data.value);
  };

  const handleTeam = async (e, data) => {
    setTeam(data.value);
  };

  const handleUrgency = (e, data) => {
    setUrgency(data.value);
  };

  const handleDescription = (e, data) => {
    setDescription(data.value);
  };

  const createTask = () => {
    const randomID = new Date().getTime().toString(36);
    const taskRef = firebase.database().ref(randomID);

    const newTask = {
      id: randomID,
      taskName: taskName,
      team: team,
      urgency: urgency,
      description: description,
      created: Date().valueOf(),
      complete: false,
    };
    setDidWrite(false);
    try {
      taskRef.set(newTask, (error) => {
        if (error) {
          setFailure(true);
          setSuccess(false);
          setDidWrite(true);
          console.error(error);
        } else {
          setSuccess(true);
          setFailure(false);
          setDidWrite(true);
          setTaskName("");
          setTeam("");
          setUrgency();
          setDescription("");
        }
      });
    } catch (error) {
      setFailure(true);
      setSuccess(false);
      setDidWrite(true);
      alert(error.message);
      console.error(error);
    }

    const key = taskRef.key;
    console.log("KEY", key);
  };

  return (
    <Form onSubmit={createTask}>
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="Task Name"
          placeholder="Task Name"
          onChange={handleTaskName}
          value={taskName}
        />
        <Form.Field
          control={Select}
          label="Team"
          options={options}
          onChange={handleTeam}
          placeholder="Team"
          value={team}
        />
      </Form.Group>
      <Form.Group inline>
        <Label circular color="violet">
          Urgency
        </Label>
        <Form.Field>
          <Radio
            label="High"
            name="radioGroup"
            value="High"
            checked={urgency === "High"}
            onChange={handleUrgency}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Middle"
            name="radioGroup"
            value="Middle"
            checked={urgency === "Middle"}
            onChange={handleUrgency}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Low"
            name="radioGroup"
            value="Low"
            checked={urgency === "Low"}
            onChange={handleUrgency}
          />
        </Form.Field>
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="Description"
        placeholder="Describe the task..."
        onChange={handleDescription}
        value={description}
      />
      {didWrite ? (
        <Form.Field control={Button}>Add Task</Form.Field>
      ) : (
        <Form.Field control={Button} disabled loading>
          Add Task
        </Form.Field>
      )}
      {success === true ? (
        <Message positive>
          <Message.Header>Task created successfully!</Message.Header>
        </Message>
      ) : (
        ""
      )}
      {failure && (
        <Message>
          <Message.Header>Could not create task!</Message.Header>
        </Message>
      )}
    </Form>
  );
};

export default FormExampleFieldControl;
