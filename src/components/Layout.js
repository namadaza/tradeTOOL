import React from "react";
import { Link } from "react-router";

import Header from "./layout/Header";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        {this.props.children}
      </div>
    );
  }
}
