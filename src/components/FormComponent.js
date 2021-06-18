import React, { Component } from "react";
import {
  Button,
  Checkbox,
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

class FormExampleFieldControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field control={Input} label="Task" placeholder="Task Name" />
          <Form.Field
            control={Select}
            label="Team"
            options={options}
            placeholder="Team"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Urgency</label>
          <Form.Field
            control={Radio}
            label="High"
            value="1"
            checked={value === "1"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Middle"
            value="2"
            checked={value === "2"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Low"
            value="3"
            checked={value === "3"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Description"
          placeholder="Describe the task..."
        />
        <Form.Field control={Button}>Add Task</Form.Field>
      </Form>
    );
  }
}

export default FormExampleFieldControl;
