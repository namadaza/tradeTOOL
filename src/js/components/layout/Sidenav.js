import React from "react";
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
        <a href="javascript:;" data-toggle="collapse" data-target={"#" + item.name}>{item.display}<i class="fa fa-caret-square-o-down" aria-hidden="true"></i></a>
        <ul id={item.name} class="collapse">
          <li>
            <a href="#">{item.category}</a>
          </li>
        </ul>
      </li>
    )
  }

  render() {
    return (
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav side-nav">
          {_(CATEGORIES).map(this.navTemplate, this)}
        </ul>
      </div>
    )
  }
}
