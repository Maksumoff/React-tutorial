import React, { Component } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
  }
  render() {
    const mouseOverHandler = () => {
      this.setState({ isHover: true });
    };
    const mouseOutHandler = () => {
      this.setState({ isHover: false });
    };
    return (
      <div className="Formhandle">
        <form className="form">
          <label htmlFor="name">
            Kompaniya nomi{" "}
            <FaExclamationCircle
              onMouseOver={mouseOverHandler}
              onMouseOut={mouseOutHandler}
              className="exclamation"
            />{" "}
            {this.state.isHover && (
              <span className="descr">Kompaniyangizni kiriting</span>
            )}
          </label>
          <input
            name="name"
            type="text"
            placeholder="Kompaniya nomini yozing"
          />{" "}
          <label htmlFor="address">Kompaniya manzili</label>
          <input
            name="address"
            type="text"
            placeholder="Kompaniya manzilini kiriting"
          />{" "}
          <label htmlFor="check">Faoliyat turi</label>
          <select name="check">
            <option value="" hidden>
              --Tanlash--
            </option>
            <option value="it">IT</option>
            <option value="dorixona">Investment</option>
            <option value="mashina">Online magazin</option>
          </select>
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Telefon raqamingizni kiriting"
          />{" "}
          <label htmlFor="email">Elektron pochta</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Elektron pochtangizni kiriting"
          />{" "}
        </form>
        <div className="btn">
          <button>Tasdiqlash</button>
          <button>Bekor qilish</button>
        </div>
      </div>
    );
  }
}
