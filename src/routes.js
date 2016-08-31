import React from "react";
import { Route } from "react-router";

import Layout from "./pages/Layout";
import Posts from "./pages/Posts";
import Login from "./js/components/dash/Login";
import CreateAccount from "./js/components/dash/CreateAccount";

export default (
  <Route component={Layout}>
    <Route path="/" component={Posts} />
    <Route path="/login" component={Login} />
    <Route path="/createAccount" component={CreateAccount} />
  </Route>
)
