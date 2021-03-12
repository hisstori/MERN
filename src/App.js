import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Top from "./Top";
import Categories from "./Python";
import Mobile from "./Mobile";
import Java from "./Java";
import Programming from "./Programming";
import Web from "./Web";
import New from "./New";
import Books from "./Books";
import Book from "./Titles";
import Splash from "./Splash";
import TestBR from "./Test-burger";

import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.setData = this.setData.bind(this);
  }

  setData(data) {
    this.setState({ data: data });
  }
  render() {
    return (
      <section class="hero is-black is-fullheight">
        <div class="hero-head">
          <nav class="navbar is-transparent">
            <div class="container">
              <div class="navbar-burger" data-target="navbarMenuHeroC">
                <span></span>
                <span></span>
                <span></span>
                </div>
              <div class="navbar-start">
                <NavLink to="/" class="navbar-item title">
                  Books of Programming API
                </NavLink>
              </div>
              <div id="navbarMenuHeroC" class="navbar-menu">
                <div class="navbar-end">
                  <NavLink to="/new" class="button is-black navbar-item">
                    New Book
                  </NavLink>
                  <NavLink to="/top" class="button is-black navbar-item">
                    Top 10 Books
                  </NavLink>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link navbar-item button is-black">
                      Categories
                      </a>
                      <div class="navbar-dropdown is-boxed">
                        <div class="dropdown-item">
                            <NavLink activeClassName="is-active" to="/java">Java</NavLink>
                            <hr class="navbar-divider" />
                            <NavLink to="/categories">Python</NavLink>
                            <hr class="navbar-divider" />
                            <NavLink to="/programming">Programming</NavLink>
                            <hr class="navbar-divider" />
                            <NavLink to="/web">Web Development</NavLink>
                            <hr class="navbar-divider" />
                            <NavLink to="/mobile">Mobile</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </div>
          </nav>
        </div>
        {/* </div> */}
        <Route path="/" exact component={Splash} />
        <Route path="/books" component={Books} />
        <Route path="/top" component={Top} />
        <Route path="/categories" component={Categories} />
        <Route path="/java" component={Java} />
        <Route path="/programming" component={Programming} />
        <Route path="/web" component={Web} />
        <Route path="/mobile" component={Mobile} />
        <Route path="/new" component={New} />
      </section>
    );
  }
}
export default App;
