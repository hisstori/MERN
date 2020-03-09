import React, { Component } from "react";
import "./App.css";
// import "./App.sass";
import "./dropdown.sass";
import "bulma/css/bulma.css";
import Title from "./Titles";
import Categories from "./Categories";
import Descriptions from "./Descriptions";
import Home from "./Home";
// import Image from "./Images";
import { Route, Link } from "react-router-dom";

// class App extends Component {

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
          <header class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span
                  class="navbar-burger burger"
                  data-target="navbarMenuHeroC"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" class="navbar-menu">
                <div class="navbar-end">
                  <Link to="/" class="navbar-item is-active">
                    Home
                  </Link>
                  <Link to="/titles" class="navbar-item is-active">
                    Titles
                  </Link>
                  <div class="dropdown is-hoverable navbar-item">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                        <span>Languages</span>
                        <span class="icon is-small">
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            <Link to="/categories">
                              Python
                            </Link><br/>
                            <Link to="/java">
                              Java
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="navbar-item">
                    <a class="button is-danger is-inverted">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li class="is-active">
                  <a>Overview</a>
                </li>
                <li>
                  <a>Modifiers</a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li>
                  <a>Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div> */}
        <Route path="/" component={Home} />
        <Route path="/titles" component={Title} />
        <Route path="/categories" component={Categories} />
        <Route path="/descriptions" component={Descriptions} />
      </section>
    );
  }
}
export default App;
