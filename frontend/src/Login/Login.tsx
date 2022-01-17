import React, { useState } from "react";
import logo from "./qover-logo.svg";
import checkCircled from "./check-circled.svg";
import { Button } from "../Button";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticateLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="Qover logo" />
        <div className="login__card">
          <p className="login__card-title">Welcome at Qover</p>
          <form onSubmit={authenticateLogin}>
            <div className="login__card-input">
              <div className="login__card-label">Email</div>
              <input
                type="text"
                className="input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="login__card-input">
              <div className="login__card-label">Password</div>
              <input
                type="password"
                className="input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="login__card-row">
              <div className="remember__container">
                <img
                  src={checkCircled}
                  className="remember__check"
                  alt="check"
                />
                <span className="remember__text">Remember me</span>
              </div>
              <a className="forgot__text">Forgot your password?</a>
            </div>
            <Button text="Sign in to your account" />
          </form>
        </div>
      </div>
    </div>
  );
};
