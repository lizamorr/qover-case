import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { store } from "./configure-store";
// import { Login } from "./Login";
// import { Header } from "./Header";
// import { Footer } from "./Footer";
import { Car } from "./Car";
import { Provider } from "react-redux";
// import { Quote } from "./Quote";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Header />
    <Login />
    <Footer /> */}
      <Car />
      {/* {<Quote />} */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
