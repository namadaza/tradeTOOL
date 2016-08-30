import React from "react";
import { Link } from "react-router";

import HeaderStore from '../../stores/HeaderStore';
import HeaderActions from '../../actions/HeaderActions';

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

    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      HeaderActions.updateOnlineUsers(data);
    })

    $(document).ajaxStart(() => {
      HeaderActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        HeaderActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    HeaderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      HeaderActions.findPosts({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

  render() {
    let accountButtons;
    let showModals;

    if (!this.props.userLoggedIn) {
      accountButtons = (
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

      showModals = (
        <div>
        <Login id="myLoginModal" class="modal fade" role="dialog"></Login>
        <CreateAccount id="myCreateAccModal" class="modal fade" role="dialog"></CreateAccount>
        </div>
      )
    } else {
      accountButtons = (
        <div>
        <li class="buttons">
          <a href="" class="login" data-toggle="modal" data-target="#myLoginModal">
            <i class="fa fa-sign-in"></i> My Account
          </a>
        </li>
      </div>
      )

      showModals = (
        <Login id="myLoginModal" class="modal fade" role="dialog"></Login>
      )
    }

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
            <Link to='/' class="navbar-brand"><img src="img/tt_icon.png" /></Link>
            <form ref='searchForm' onSubmit={this.handleSubmit.bind(this)}>
              <div class="navbar-search">
                <div class="container-1">
                  <input type='text' value={this.state.searchQuery} onChange={HeaderActions.updateSearchQuery} id="search" placeholder="Search..." />
                  <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}>
                    <span className='glyphicon glyphicon-search'></span>
                  </button>
                </div>
              </div>
          </form>
          <span className='badge badge-up badge-danger'>{this.state.onlineUsers}</span>
          </div>

          <ul class="nav navbar-right top-nav">
            { accountButtons }
          </ul>
          <Sidenav />
        </nav>
        { showModals }
      </div>
    );
  }
}
