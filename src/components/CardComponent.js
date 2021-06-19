import React from "react";
import { Card, Button } from "semantic-ui-react";

function CardComponent({ title, team, urgency, description }) {
  return (
    <Card>
      <Card.Content header={title} />
      <Card.Content team={team} />
      <Card.Content urgency={urgency} />
      <Card.Content description={description} />
    </Card>
  );
}

export default CardComponent;
