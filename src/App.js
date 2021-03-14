import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import "bulma/css/bulma.css";
import Top from "./Top";
import Categories from "./Python";
import Mobile from "./Mobile";
import Java from "./Java";
import Programming from "./Programming";
import Web from "./Web";
import New from "./New";
// import Books from ./Books";
import Book from "./Titles";
import Splash from "./Splash";
import TestBR from "./Test-burger";
import Search from "./search";

import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
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
                <Link to="/" class="navbar-item title">
                  Books of Programming API
                </Link>
              </div>
              <div id="navbarMenuHeroC" class="navbar-menu">
                <div class="navbar-end">
                  <Link to="/new" class="navbar-item is-black is-hoverable">
                    New Book
                  </Link>
                  <Link to="/top" class="navbar-item">
                    Top 10 Books
                  </Link>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link navbar-item">Categories</a>
                    <div class="navbar-dropdown is-boxed">
                      <div class="dropdown-item">
                        <Link to="/java">Java</Link>
                        <hr class="navbar-divider" />
                        <Link to="/categories">Python</Link>
                        <hr class="navbar-divider" />
                        <Link to="/programming">Programming</Link>
                        <hr class="navbar-divider" />
                        <Link to="/web">Web Development</Link>
                        <hr class="navbar-divider" />
                        <Link to="/mobile">Mobile</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Search />
                {/* </div> */}
              </div>
            </div>
          </nav>
        </div>
        {/* </div> */}
        <Route path="/" exact component={Splash} />
        {/* <Route path="/books" component={Books} /> */}
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

// ReactDOM.render(<App />, document.getElementById('app'));

export default App;
