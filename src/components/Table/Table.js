import React, { Component } from "react";
import { StudentList } from "../StudentList/StudentList";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: StudentList,
      name: "",
      status: "",
      search: "id",
    };
  }
  render() {
    //Change input with [e.target.name]
    const changeInput = (e) => {
      console.log(e.target.name, e.target.value);
      this.setState({ [e.target.name]: e.target.value }); // [e.target.name] checks the "name" of input
    };
    const filterSearch = (e) => {
      //   console.log(e.target.value);
      const { value } = e.target;
      let res = StudentList.filter((item) =>
        `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ data: res });
    };

    const selectChange = (e) => {
      console.log(e.target.value);
      this.setState({ search: e.target.value });
    };

    const addHandler = (e) => {};

    const { name, status, data } = this.state;
    return (
      <div>
        <div>
          <h1>Name: {name} </h1>
          <h1>status: {status} </h1>
          <input
            name="name"
            onChange={changeInput}
            type="text"
            placeholder="name"
          />
          <input
            name="status"
            onChange={changeInput}
            type="text"
            placeholder="status"
          />
          <button onClick={addHandler}>add</button>
          <hr />
          <br />
          <br />
          <hr />
          {/* <h1>Search: {search} </h1> */}
          <input
            name="filter"
            onChange={filterSearch}
            type="text"
            placeholder="Search"
          />
          <select onChange={selectChange} name="" id="">
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="status">Status</option>
          </select>

          {/*Table*/}
          <table border="1" width="100%">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>status</th>
                <th>DELETE</th>
                <th>EDIT</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, name, status }) => {
                return (
                  <tr key={id}>
                    <td>{id} </td>
                    <td>{name} </td>
                    <td>{status} </td>
                    <td>delete </td>
                    <td>edit</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
