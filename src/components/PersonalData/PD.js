import React, { Component } from "react";
import { StudentList } from "../StudentList/StudentList";

export default class PD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: StudentList,
      name: "",
      status: "",
      search: "id",
      active: null,
      // surname: "Maksumoff",
      // age: 22,
    };
  }

  render() {
    const changeHandler = (e) => {
      console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
    };

    const filterHandler = (e) => {
      //   console.log(e.target.value);
      const { value } = e.target;
      let res = StudentList.filter((item) =>
        `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ data: res });
    };

    const searchHandler = (e) => {
      console.log(e.target.value);
      this.setState({ search: e.target.value });
    };

    const deleteHandler = (id) => {
      console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };

    const addHandler = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: [...this.state.data, user],
        name: "",
        status: "",
      });

      console.log(user);
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

    // const nameHandler = (e) => {
    //   //   console.log(e.target.value);
    //   this.setState({ name: e.target.value });
    // };
    // const surnameHandler = (e) => {
    //   console.log(e);
    //   this.setState({ surname: e?.target?.value });
    // };
    return (
      <div>
        <h1>name: {this.state.name} </h1>
        <h1>status: {this.state.status} </h1>
        {/* <h1>age: {this.state.age} </h1> */}

        <input
          value={this.state.name}
          name="name"
          onChange={changeHandler}
          type="text"
          placeholder="Name"
        />
        <input
          value={this.state.status}
          name="status"
          onChange={changeHandler}
          type="text"
          placeholder="Status"
        />

        <button onClick={addHandler}>Add</button>
        <hr />
        <input
          name="filter"
          onChange={filterHandler}
          type="text"
          placeholder="Search"
        />
        <select onChange={searchHandler} name="" id="">
          <option value="id">ID</option>
          <option value="name">NAME</option>
          <option value="status">STATUS</option>
        </select>

        {/* <input
          onChange={(e) => surnameHandler(e, "hey")}
          type="text"
          placeholder="Surname"
        /> */}
        {/* <input
          name="surname"
          onChange={changeHandler}
          type="text"
          placeholder="Surname"
        /> */}
        {/* <input
          name="age"
          onChange={changeHandler}
          type="number"
          placeholder="Age"
        /> */}
        {/* <hr />
        <input onChange={filterHandler} type="text" placeholder="Filter" />
        <hr /> */}

        <table border="1" width={"100%"}>
          <caption>Table</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map(({ id, name, status }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          name="name"
                          onChange={changeHandler}
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
                          onChange={changeHandler}
                          value={this.state.status}
                          type="text"
                        />
                      ) : (
                        status
                      )}
                    </td>
                    <td>
                      <button onClick={() => deleteHandler(id)}>Delete</button>
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          editHandler(
                            { id, name, status },
                            this.state.active?.id === id
                          )
                        }
                      >
                        {this.state.active?.id === id ? "save" : "edit"}
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={5}>no data</th>
              </tr>
            )}
          </tbody>
        </table>
        <hr />
      </div>
    );
  }
}
