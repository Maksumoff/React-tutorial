import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img
          src="https://thumb.tildacdn.com/tild3239-3563-4233-b963-636265616566/-/resize/800x/-/format/webp/noroot.png"
          alt="iman.uz"
        />
        <h1>Iman</h1>
        <p>owner</p>
        <button className="btn-enter">Kirish</button>
      </div>
    );
  }
}
