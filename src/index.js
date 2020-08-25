import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import postReducer from "./reducers/postReducer";
import { Provider } from "react-redux";

import "./index.css";

import App from "./App";
const store = createStore(postReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
