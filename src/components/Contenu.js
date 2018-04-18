import React, { Component } from "react";

class Contenu extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div className="page">
        <h1>Page Contenu {id}</h1>
      </div>
    );
  }
}
export default Contenu;
