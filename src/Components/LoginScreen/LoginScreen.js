import React from "react";
import "./LoginScreen.css";
import bgImage from "../../Assets/background.gif";

const LoginScreen = () => {
  return (
    <div className="login-container">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <label>Email</label>
            <input type="email" name="" required="" placeholder="user@gmail.com" />
          </div>
          <div className="user-box">
            <label>Password</label>
            <input type="password" name="" required="" placeholder="******" />
          </div>
        </form>
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default LoginScreen;
