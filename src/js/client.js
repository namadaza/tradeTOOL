import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Posts from "./pages/Posts";

const client = document.getElementById('client');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Posts}></IndexRoute>
    </Route>
  </Router>,
client);
