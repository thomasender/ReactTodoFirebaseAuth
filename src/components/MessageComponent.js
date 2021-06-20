import React, { Component } from "react";
import { Message } from "semantic-ui-react";

class MessageComponent extends Component {
  state = { visible: true };

  handleDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header="Task created!"
          content="Your task has been created. Switch to 'See Tasks' to see it!"
        />
      );
    }

    return <p></p>;
  }
}

export default MessageComponent;
