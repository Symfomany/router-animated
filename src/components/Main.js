import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    const connected = localStorage.getItem("connected");
    if (!connected) {
      this.props.history.push("/");
    }

    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem("connected");
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="page">
        <h1>Vous êtes connecté</h1>
        <a onClick={this.logout}>Se deconnecter</a>
      </div>
    );
  }
}

export default Main;
