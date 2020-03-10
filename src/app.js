import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.css";

const ExpenseDashboardPage = () => <div>This is from me</div>;
const routes = (
  <BrowserRouter>
    <Route path="/" component={ExpenseDashboardPage} />
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));