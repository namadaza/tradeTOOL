import React from "react";
import { Link } from "react-router";

export default class Login extends React.Component {
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
    const wrapperStyle = {
      width: "350px"
    }
    return (
      <div id="myLoginModal" class="modal fade" role="dialog">
        <div class="modal-dialog" style={wrapperStyle}>

          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title" style={titleStyle}>
                 tradeTOOL
              </h4>
            </div>
            <div class="modal-body" style={marginStyle}>
              <form class="form-horizontal" method="post" action="#">

                <div class="form-group">
                  <label for="username" class="cols-sm-2 control-label">Username</label>
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                      <input type="text" class="form-control" name="username" id="username"  placeholder="Enter your Username"/>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="password" class="cols-sm-2 control-label">Password</label>
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                      <input type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                    </div>
                  </div>
                </div>


                <div class="form-group ">
                  <button type="button" style={btnStyle} class="btn btn-primary btn-lg btn-block login-button">
                    <i class="fa fa-sign-in"></i> 
                    <Link to="/login">Login</Link>
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
    );
  }
}
