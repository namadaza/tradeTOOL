import React from "react";
import _ from "underscore";
import { Link } from "react-router";

const ACCOUNT = [
  {"title": "Name", "label": "name", "class": "fa fa-user fa", "name": "name", "placeholder": "Enter Your Name", "type": "text"},
  {"title": "Email", "label": "email", "class": "fa fa-envelope fa", "name": "email", "placeholder": "Enter Your Email", "type": "text"},
  {"title": "Username", "label": "username", "class": "fa fa-users fa", "name": "user", "placeholder": "Enter Your Username", "type": "text"},
  {"title": "Password", "label": "password", "class": "fa fa-lock fa-lg", "name": "password", "placeholder": "Enter Your Password", "type": "password"},
  {"title": "Confirm Password", "label": "confirm", "class": "fa fa-lock fa-lg", "name": "confirm", "placeholder": "Confirm Your Password", "type": "password"},
]

export default class CreateAccount extends React.Component {
  accountTemplate(item) {
    return (
      <div class="form-group">
        <label for={item.label} class="cols-sm-2 control-label">{item.title}</label>
        <div class="cols-sm-10">
          <div class="input-group">
            <span class="input-group-addon"><i class={item.class} aria-hidden="true"></i></span>
            <input type={item.type} class="form-control" name={item.name} id={item.name} placeholder={item.placeholder}/>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const marginStyle = {
      margin: "10px"
    }
    const titleStyle = {
      fontFamily: "'Abril Fatface', cursive",
      fontSize: "40px",
      textAlign: "center",
      color: "#ff7d1e"
    }
    const btnStyle = {
      backgroundColor: "#2196f3"
    }
    return (
      <div id="myCreateAccModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title" style={titleStyle}>
                 tradeTOOL
              </h4>
            </div>
            <div class="modal-body" style={marginStyle}>
              <form class="form-horizontal" method="post" action="#">
                {_(ACCOUNT).map(this.accountTemplate, this)}
                <div class="form-group ">
                  <button type="button" style={btnStyle} class="btn btn-primary btn-lg btn-block login-button">
                    <i class="fa fa-user"></i> 
                    <Link to="/createAccount">Register</Link>
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
