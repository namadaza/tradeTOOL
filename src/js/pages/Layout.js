import React from "react";
import { Link } from "react-router";

import Header from "../components/layout/Header";

export default class Layout extends React.Component {
  render() {
    console.log("layout")
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
