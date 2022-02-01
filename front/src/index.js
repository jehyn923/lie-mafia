import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import SignalApp from "./services/finalclient";
// import FinalApp from "./FinalApp";

// const signalApp = new SignalApp();
// console.log("시그널앱", signalApp);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <FinalApp signalApp={signalApp} /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
