import React, { Component } from "react";
// import Form from "../Form/Form";
import { FaExclamationCircle } from "react-icons/fa";
import "../Form/Form.css";
import { AddCardData } from "../Add/AddCardData";
import iman from "../../Assets/iman.uz.png";

export default class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addBtn: { add: "+", addStore: "Do'kon qo'shish", status: true },
      name: "",
      industry: "",
      data: AddCardData,
      // data: <Form />,
    };
  }
  render() {
    // console.log(this.state.addBtn.status);
    const addHandler = () => {
      this.setState({
        addBtn: {
          status: !true,
        },
      });
    };

    const btnStatusHandler = (e) => {
      // console.log(e.target.name);
      this.setState({
        addBtn: {
          add: "+",
          addStore: "Do'kon qo'shish",
          status: true,
        },
      });
    };

    const changeInput = (e) => {
      console.log(e.target.value);
      this.setState({ [e.target.name]: e.target.value });
    };
    const selectHandler = (e) => {
      console.log(e.target.value);
      this.setState({ industry: e.target.value });
    };

    const confirmHandler = (e) => {
      console.log(e.target.value);
      let newCompany = {
        id: Date.now(),
        img: iman,
        name: this.state.name,
        industry: this.state.industry,
        enter: "Kirish",
      };
      this.setState({
        addBtn: {
          add: "+",
          addStore: "Do'kon qo'shish",
          status: true,
        },
        data: [...this.state.data, newCompany],
        name: "",
        industry: "",
      });
    };

    const { addBtn, name, industry, data } = this.state;

    return (
      <div className="App">
        {data.map(({ id, img, name, industry, enter }) => {
          return (
            <div key={id} className="Card">
              <img src={img} alt="" />
              <h1>{name}</h1>
              <p>{industry} </p>
              <button className="btn-enter">{enter} </button>
            </div>
          );
        })}
        {this.state.addBtn.status ? (
          <div className="AddBtn">
            <button onClick={addHandler} className="btn-add">
              <h1>{addBtn.add}</h1>
            </button>
            <h3>{addBtn.addStore}</h3>
          </div>
        ) : (
          <div className="Formhandle">
            <form className="form">
              <label htmlFor="name">
                Kompaniya nomi {name}
                <FaExclamationCircle
                  // onMouseOver={mouseOverHandler}
                  // onMouseOut={mouseOutHandler}
                  className="exclamation"
                />{" "}
                {/* {this.state.isHover && (
              <span className="descr">Kompaniyangizni kiriting</span>
            )} */}
              </label>
              <input
                onChange={changeInput}
                value={name}
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
              <label htmlFor="check">Faoliyat turi {industry} </label>
              <select onChange={selectHandler} name="check">
                <option value="" hidden>
                  --Tanlash--
                </option>
                <option value="IT">IT</option>
                <option value="Investment">Investment</option>
                <option value="Online magazin">Online magazin</option>
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
              <button name="confirm" onClick={confirmHandler}>
                Tasdiqlash
              </button>
              <button name="cancel" onClick={btnStatusHandler}>
                Bekor qilish
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
