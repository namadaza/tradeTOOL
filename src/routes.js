import React from "react";
import { Route } from 'react-router';

import Layout from "./pages/Layout";
import Posts from "./pages/Posts";

export default (
  <Route component={Layout}>
    <Route path="/" component={Posts} />
  </Route>
)
