import React from "react";
import { Route } from "react-router";

import Layout from "./components/Layout";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import Login from "./components/layout/Login";
import CreateAccount from "./components/layout/CreateAccount";

export default (
  <Route component={Layout}>
    <Route path="/" component={Posts} />
    <Route path="/createPost" component={CreatePost} />
    <Route path="/login" component={Login} />
    <Route path="/createAccount" component={CreateAccount} />
  </Route>
)
