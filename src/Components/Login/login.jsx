import React, { useRef } from "react";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const login = () => {
    return fetch("http://158.51.99.245:8081/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res?.data);
      });
  };

  return (
    <div>
      <h3>Login Page</h3>
      <label>
        {" "}
        Email
        <input ref={emailRef} type="text" />
      </label>
      <label>
        {" "}
        Password
        <input ref={passwordRef} type="password" />
      </label>
      <button onClick={login}>login</button>
      <button onClick={() => localStorage.clear()}>logout</button>
    </div>
  );
};

export default Login;
