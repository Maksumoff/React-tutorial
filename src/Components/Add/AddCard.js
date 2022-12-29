import React, { Component } from "react";
import { AddCardData } from "./AddCardData";

export default class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addBtn: { add: "+", addStore: "Do'kon qo'shish" },
      data: AddCardData,
      // form: {
      //   name: "Kompaniya nomi",
      //   address: "Kompaniya manzili",
      //   industry: "Foaliyat turi",
      //   phone: "Telefon raqami",
      //   email: "Elektron pochta",
      //   confirm: "Tasdiqlash",
      //   cancel: "Bekor qilish",
      // },
    };
  }
  render() {
    const addHandler = (e) => {
      console.log(e.target.value);
      let forms = (
        <div>
          <form>
            <input type="text" />
            <input type="text" />
            <input type="radio" name="" id="" />
            <input type="tel" name="" id="" />
            <input type="email" name="" id="" />
          </form>
        </div>
      );
      this.setState({
        addBtn: forms,
      });
    };
    //companiya nomi
    //kompaniya manzili
    //5 row and 2 btn
    const { addBtn } = this.state;

    return (
      <div>
        <div className="AddBtn">
          <button onClick={addHandler} className="btn-add">
            <h1>{addBtn.add}</h1>
          </button>
          <h3>{addBtn.addStore}</h3>
        </div>
      </div>
    );
  }
}
