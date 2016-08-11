import React from "react";
import { Link } from "react-router";

import Sidenav from "./Sidenav";

export default class Header extends React.Component {
  render() {
    console.log("header")
    return (
      <div id="wrapper">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html"><img src="assets/tt_icon.png" /></a>
            <div class="navbar-search">
              <div class="container-1">
                <input type="search" id="search" placeholder="Search..." />
                <span class="icon"><i class="fa fa-search"></i></span>
              </div>
            </div>
          </div>

          <ul class="nav navbar-right top-nav">
            <li class="buttons">
              <a href="#" class="login"><i class="fa fa-sign-in"></i> Login</a>
            </li>
          </ul>
          <Sidenav />
        </nav>
      </div>
    );
  }
}
