import React, { Component } from "react";
import "./App.css";
import "./App.sass";
// import 'bulma/css/bulma.css'
import Title from "./Titles";
import Categories from "./Categories";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Bulma</h1>

        <p className="subtitle">
        </p>

        <div class="tabs">
          <ul>
            <li class="is-active">
              <Link to="/titles">
                <span class="icon is-medium">
                  <i class="fas fa-image" aria-hidden="true"></i>
                </span>
                <span>Titles</span>
              </Link>
            </li>
            <li>
              <Link to="/categories">
              <span class="icon is-medium">
                  <i class="fas fa-image" aria-hidden="true"></i>
                </span>
              <span><a>Categories</a></span>
              </Link>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <div className="button is-primary">Primary</div>
          <div className="button is-link">Link</div>
          <div>
            <h1>This is the homepage!</h1>
            <p>Where you can find the programming books you need!</p>
          </div>
          <main>
            <Route path="/titles" component={Title} />
            <Route path="/categories" component={Categories} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
