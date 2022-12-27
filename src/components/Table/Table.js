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
      active: null,
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

    const addHandler = () => {
      let newUser = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: [...this.state.data, newUser],
        name: "",
        status: "",
      });
    };

    const deleteHandler = (id) => {
      console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    const editHandler = ({ id, name, status }, isSave) => {
      if (isSave) {
        let res = this.state.data.map((value) =>
          value.id === this.state.active.id
            ? { ...value, name: this.state.name, status: this.state.status }
            : value
        );
        this.setState({ active: null, data: res });
      } else {
        this.setState({
          name: name,
          status: status,
          active: { id, name, status },
        });
      }
    };

    const { name, status, data } = this.state;
    return (
      <div>
        <div>
          <h1>Name: {name} </h1>
          <h1>status: {status} </h1>
          <input
            value={name}
            name="name"
            onChange={changeInput}
            type="text"
            placeholder="name"
          />
          <input
            value={status}
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
              {data.length ? (
                data.map(({ id, name, status }) => {
                  return (
                    <tr key={id}>
                      <td>{id} </td>
                      <td>
                        {this.state.active?.id === id ? (
                          <input
                            name="name"
                            onChange={changeInput}
                            value={this.state.name}
                            type="text"
                          />
                        ) : (
                          name
                        )}
                      </td>
                      <td>
                        {this.state.active?.id === id ? (
                          <input
                            name="status"
                            onChange={changeInput}
                            value={this.state.status}
                            type="text"
                          />
                        ) : (
                          status
                        )}{" "}
                      </td>
                      <td onClick={() => deleteHandler(id)}>delete </td>
                      <td
                        onClick={() =>
                          editHandler(
                            { id, name, status },
                            this.state.active?.id === id
                          )
                        }
                      >
                        {this.state.active?.id === id ? "save" : "edit"}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th colSpan={5}>
                    <h1>no data</h1>
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
