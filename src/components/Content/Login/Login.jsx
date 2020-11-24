import React from "react";
import "../../../css/login.css";

const Login = () => {
  return (
    <>
      <div className="login-header">
        <h1>CREACT</h1>
      </div>
      <div className="login-box">
        <h1>Can't Wait backing to CREACT app!</h1>
        <form action="">
          <label htmlFor="">
            Email: 
            <input type="email" name="" id="" />
          </label>
          <label htmlFor="">
            Password: 
            <input type="password" name="" id="" />
          </label>
          <a href="">Forgot Password</a>
          <input type="submit" value="Login" />
          <a href="">Sign Up</a>
        </form>
      </div>
    </>
  );
};

export default Login;
