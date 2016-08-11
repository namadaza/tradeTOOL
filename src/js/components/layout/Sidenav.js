import React from "react";

export default class Sidenav extends React.Component {
  render() {
    console.log("sidenav")
    return (
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav side-nav">
              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#forsale">For Sale<i class="fa fa-caret-square-o-down" aria-hidden="true"></i></a>
                <ul id="forsale" class="collapse">
                  <li>
                    <a href="#">Price</a>
                  </li>
                  <li>
                    <a href="#">Category</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#forfree">For Free<i class="fa fa-caret-square-o-down" aria-hidden="true"></i></a>
                <ul id="forfree" class="collapse">
                  <li>
                    <a href="#">Category</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#academic">Academic<i class="fa fa-caret-square-o-down" aria-hidden="true"></i></a>
                <ul id="academic" class="collapse">
                  <li>
                    <a href="#">Category</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#social">Social<i class="fa fa-caret-square-o-down" aria-hidden="true"></i></a>
                <ul id="social" class="collapse">
                  <li>
                    <a href="#">Category</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#athletic">Athletic<i class="fa fa-caret-square-o-down" aria-hidden="true"></i></a>
                <ul id="athletic" class="collapse">
                  <li>
                    <a href="#">Category</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#housing">Housing<i class="fa fa-caret-square-o-down" aria-hidden="true"></i></a>
                <ul id="housing" class="collapse">
                  <li>
                    <a href="#">Category</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
    );
  }
}
