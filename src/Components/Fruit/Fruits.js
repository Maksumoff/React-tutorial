import React, { Component } from "react";

class Fruits extends Component {
  render() {
    const { url, name } = this.props.properties;
    return (
      <div className="Name">
        {url}
        <h3>{name}</h3>
      </div>
    );
  }
}

export default Fruits;
