import React, { Component } from "react";
import { AddCardData } from "../Add/AddCardData";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: AddCardData,
    };
  }
  render() {
    return (
      <>
        {this.state.data.map(({ id, img, name, industry, enter }) => {
          return (
            <div className="Card">
              <img src={img} alt="" />
              <h1>{name}</h1>
              <p>{industry} </p>
              <button className="btn-enter">{enter} </button>
            </div>
          );
        })}
      </>
    );
  }
}
