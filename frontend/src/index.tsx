import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Login } from "./Login";
import { Car } from "./Car";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Quote } from "./Quote";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Background } from "./Background";
import { store } from "./store/configure-store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={[
              <Background>
                <Header />
                <Login />
                <Footer />
              </Background>,
            ]}
          />
          <Route path={"/cars"} element={<Car />} />
          <Route path={"/quote"} element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
