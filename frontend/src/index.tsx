import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Login } from "./Login";
import { Header } from "./Header";
import { Footer } from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Login />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
