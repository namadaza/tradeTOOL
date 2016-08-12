import React from "react";

export default class Login extends React.Component {
  render() {
    console.log("login")
    return (
      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title"><i class="fa fa-sign-in"></i> Login</h4>
            </div>
            <div class="modal-body">
              <label><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required></input>
              <p></p>
              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required></input>
              <p></p>
              <button type="submit">Login</button>
              <p></p>
              <input type="checkbox" checked="checked"> Remember me</input>
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
