import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import Fetch from "./Components/Fetch/fetch";
import Login from "./Components/Login/login";
import GetData from "./Components/Get Data/getData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
    <GetData />
    {/* <Fetch /> */}
  </React.StrictMode>
);
