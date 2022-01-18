import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
// import { Login } from "./Login";
// import { Header } from "./Header";
// import { Footer } from "./Footer";
// import { Car } from "./Car";
import { Quote } from "./Quote";

ReactDOM.render(
  <React.StrictMode>
    {/* <Header />
    <Login />
    <Footer /> */}
    {/* <Car /> */}
    {<Quote />}
  </React.StrictMode>,
  document.getElementById("root")
);
