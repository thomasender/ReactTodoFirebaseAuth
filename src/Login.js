import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header size="large">
          <Icon name="tasks" size="mini" />
          To-Do-List
        </Header>
        <Header sub>Manage tasks for your team</Header>
        <Header className="huge">Log In</Header>
        <Form size="large" onSubmit={handleLogin}>
          <Segment stacked>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <Button type="submit">Log in</Button>
          </Segment>
        </Form>
        <Message positive attached="bottom">
          New? Create your account here
          <Icon name="angle double right" />
          <Link to="/login">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Login);
