import React, { Component } from "react";
import "./App.css";
import "./App.sass";
import "bulma/css/bulma.css";
import Title from "./Titles";
import Categories from "./Categories";
import Descriptions from "./Descriptions";
// import Home from "./Home";
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
                  <div class="dropdown navbar-item">
                    <div class="dropdown-trigger navbar-item">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu3"
                      >
                        <span>Click me</span>
                        <span class="icon is-small">
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                      <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                          Overview
                        </a>
                        <a href="#" class="dropdown-item">
                          Modifiers
                        </a>
                        <a href="#" class="dropdown-item">
                          Grid
                        </a>
                        <a href="#" class="dropdown-item">
                          Form
                        </a>
                        <a href="#" class="dropdown-item">
                          Elements
                        </a>
                        <a href="#" class="dropdown-item">
                          Components
                        </a>
                        <a href="#" class="dropdown-item">
                          Layout
                        </a>
                        <hr class="dropdown-divider" />
                        <a href="#" class="dropdown-item">
                          More
                        </a>
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

        <div class="hero-body">
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Highest Rated</p>
              <p class="subtitle">Click to read more</p>
              <div class="columns">
                <div class="column">
                  <figure class="image">
                    <img src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/briggs.jpg" />
                  </figure>
                  Hello! Python
                </div>
                <div class="column">
                  <figure class="image">
                    <img
                      src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ceder.jpg"
                      alt="Logo"
                    />
                  </figure>
                </div>
                <div class="column">
                  <figure class="image">
                    <img
                      src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grayson.jpg"
                      alt="Logo"
                    />
                  </figure>
                  Third column
                </div>
                <div class="column">
                  <figure class="image">
                    <img
                      src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harms.jpg"
                      alt="Logo"
                    />
                  </figure>
                  Fourth column
                </div>
                <div class="column">
                  <figure class="image">
                    <img
                      src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rappin.jpg"
                      alt="Logo"
                    />
                  </figure>
                  Fifth column
                </div>
              </div>
            </article>
          </div>
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
        {/* <Route path="/" component={Home} /> */}
        <Route path="/titles" component={Title} />
        <Route path="/categories" component={Categories} />
        <Route path="/descriptions" component={Descriptions} />
      </section>
    );
  }
}
export default App;
