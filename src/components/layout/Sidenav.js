import React from "react";
import { Link } from "react-router";
import _ from "underscore";

const CATEGORIES = [
  {"name": "forSale", "display": "For Sale", "category": "Category"},
  {"name": "forFree", "display": "For Free", "category": "Category"},
  {"name": "academic", "display": "Academic", "category": "Category"},
  {"name": "social", "display": "Social", "category": "Category"},
  {"name": "athletic", "display": "Athletic", "category": "Category"},
  {"name": "housing", "display": "Housing", "category": "Category"}
]

export default class Sidenav extends React.Component {
  navTemplate(item) {
    return (
      <li>
        <Link to={item.name} href="javascript:;" data-toggle="collapse" data-target={"#" + item.name}>
            {item.display}<i class="fa fa-caret-square-o-down" aria-hidden="true"></i>
        </Link>
        <ul id={item.name} class="collapse">
          <li>
            <a href="#">{item.category}</a>
          </li>
        </ul>
      </li>
    )
  }

  render() {
    const createpostBtnStyle = {
      backgroundColor: "#2196f3"
    }
    return (
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav side-nav">
          {_(CATEGORIES).map(this.navTemplate, this)}
          <li>
            <Link to="/createPost" style={createpostBtnStyle}> Create Post</Link>
          </li>
        </ul>
      </div>
    )
  }
}
