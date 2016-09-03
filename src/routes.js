import React from "react";
import { Route } from 'react-router';

import Layout from "./components/Layout";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";

export default (
  <Route component={Layout}>
    <Route path="/" component={Posts} />
    <Route path="/createPost" component={CreatePost} />
  </Route>
)
