import React, { useState } from "react";
import app from "./base";
import { Button, Header, Segment } from "semantic-ui-react";
import FormComponent from "./components/FormComponent";
import TaskComponent from "./components/TaskComponent";

const Home = () => {
  const [isView, setIsView] = useState(true);
  return (
    <>
      <Segment>
        <Header className="huge">Add Task</Header>
        {isView ? (
          <Button
            onClick={() => {
              setIsView(false);
            }}
          >
            Add Tasks
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsView(true);
            }}
          >
            See Tasks
          </Button>
        )}
        <Button onClick={() => app.auth().signOut()}>Sign out</Button>
      </Segment>
      {isView ? <TaskComponent /> : <FormComponent />}
    </>
  );
};

export default Home;
