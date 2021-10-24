import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import store from "./context/Store";
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
