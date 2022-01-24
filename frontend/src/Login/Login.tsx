import React, { useState } from "react";
import logo from "./qover-logo.svg";
import checkCircled from "./check-circled.svg";
import { useNavigate } from "react-router";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const authenticateLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.defaults.baseURL = process.env.REACT_APP_NESTJS_BASE_URL;
    axios
      .post("/auth/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("jwt", res.data.access_token);
          navigate("/cars");
        }
      })
      .catch((error) => {
        error.response.status === 401
          ? setError(true)
          : alert("Error logging in");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="Qover logo" />
        <div className="login__card">
          <p className="login__card-title">Welcome at Qover</p>
          {error && (
            <p className="login__card-error">Invalid username or password</p>
          )}
          <form id="loginForm" onSubmit={authenticateLogin}>
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
              <a href="" className="forgot__text">
                Forgot your password?
              </a>
            </div>
            <button type="submit" className="submit-button">
              Sign in to your account
            </button>
          </form>
        </div>
        <button type="button" className="access-button">
          Don't have an account? <span className="access-link">Ask access</span>
        </button>
      </div>
    </div>
  );
};
