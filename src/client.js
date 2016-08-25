import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";

import routes from "./routes.js";

let history = createBrowserHistory();

const client = document.getElementById('client');
ReactDOM.render(
  <Router history={history}>
    {routes}
  </Router>,
client);
