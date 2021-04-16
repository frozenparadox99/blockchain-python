import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Blockchain from "./components/Blockchain";
import ConductTransaction from "./components/ConductTransaction";

ReactDOM.render(
  <React.StrictMode>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/blockchain" component={Blockchain} />
        <Route path="/conduct-transaction" component={ConductTransaction} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
