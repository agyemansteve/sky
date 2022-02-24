import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

window.addEventListener("load", function () {
  this.setTimeout(() => {
    const app = document.querySelector(".app");
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
    app.style.display = "block";
  }, 5000);
});

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <div className="preloader"> loaidng </div>
    <App />
  </Router>,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
