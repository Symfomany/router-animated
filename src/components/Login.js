import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";
import { withRouter } from "react-router-dom";

const Button = styled.button`
  background: transparent;
  border: 2px solid orange;
  border-radius: 5px;
  font-size: 20px;
  color: orange;
  width: 250px;
  height: 50px;
  &:hover {
    background: orange;
    color: white;
    transition: 0.8s;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logIn = this.logIn.bind(this);
    const connected = localStorage.getItem("connected");
    if (connected) {
      this.props.history.push("/main");
    }
  }

  logIn() {
    const config = {
      apiKey: "AIzaSyB4mjzP4xGySrvJ6-vstG4Dp_XJbHgDiKU",
      authDomain: "wild-pwa.firebaseapp.com",
      databaseURL: "https://wild-pwa.firebaseio.com",
      projectId: "wild-pwa"
    };
    firebase.initializeApp(config);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        localStorage.setItem("connected", true);
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="page">
        <Button onClick={this.logIn}>Rejoindre</Button>
      </div>
    );
  }
}
export default withRouter(Login);
