import React from "react";
import { Link } from "react-router";

import Sidenav from "./Sidenav";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = HeaderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HeaderStore.listen(this.onChange);
    HeaderActions.getAccountStatus();
  }

  componentWillUnmount() {
    HeaderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  accountButtons() {
    if (this.state.userLoggedIn) {
      return (
        <div>
          <li class="buttons">
            <a href="" class="login" data-toggle="modal" data-target="#myLoginModal">
              <i class="fa fa-sign-in"></i> Login
            </a>
          </li>
          <li class="buttons">
            <a href="" class="createacc" data-toggle="modal" data-target="#myCreateAccModal">
              <i class="fa fa-user"></i> Create Account
            </a>
          </li>
        </div>
      )
    } else {
      return (
        <div>
          <li class="buttons">
            <a href="" class="login" data-toggle="modal" data-target="#myLoginModal">
              <i class="fa fa-sign-in"></i> My Account
            </a>
          </li>
        </div>
      )
    }
  }

  showModals() {
    if (this.state.userLoggedIn) {
      return (
        <div>
          <Login id="myLoginModal" class="modal fade" role="dialog"></Login>
          <CreateAccount id="myCreateAccModal" class="modal fade" role="dialog"></CreateAccount>
        </div>
      )
    } else {
      return (
        <div>
          <Login id="myLoginModal" class="modal fade" role="dialog"></Login>
        </div>
      )
    }
  }

  render() {
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
            <a class="navbar-brand" href="index.html"><img src="img/tt_icon.png" /></a>
            <div class="navbar-search">
              <div class="container-1">
                <input type="search" id="search" placeholder="Search..." />
                <span class="icon"><i class="fa fa-search"></i></span>
              </div>
            </div>
          </div>

          <ul class="nav navbar-right top-nav">
            {this.accountButtons}
          </ul>
          <Sidenav />
        </nav>
        {this.showModals}
      </div>
    );
  }
}
