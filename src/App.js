import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Container align="center">
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Container>
      </Router>
    </AuthProvider>
  );
};

export default App;
