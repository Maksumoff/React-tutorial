import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Fetch from "./Components/Fetch/fetch";
import Login from "./Components/Login/login";
import GetData from "./Components/Get Data/getData";
import Add from "./Add/add";
import Update from "./Update/update";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
    <GetData />
    <Add />
    <Update />
    {/* <Fetch /> */}
  </React.StrictMode>
);
