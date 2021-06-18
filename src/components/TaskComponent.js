import React from "react";
import { Card } from "semantic-ui-react";

const TaskComponent = ({ title, description }) => (
  <Card>
    <Card.Content header={title} />
    <Card.Content description={description} />
  </Card>
);

export default TaskComponent;
