import React from "react";

export default class Posts extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div id="page-wrapper">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <h1 class="page-header">
                  Dashboard <small>Statistics Overview</small>
                </h1>
                <ol class="breadcrumb">
                  <li class="active">
                    <i class="fa fa-dashboard"></i> Dashboard
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
