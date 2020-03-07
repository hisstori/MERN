import React, { Component } from "react";
import "./App.css";
import "./App.sass";
import Title from "./Titles";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Bulma</h1>

        <p className="subtitle">
          Modern CSS framework based on{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
            Flexbox
          </a>
        </p>

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
          <Link to="/titles">
            <div className="button is-link">Link</div>
          </Link>
          <div>
            <h1>This is the homepage!</h1>
            <p>Where you can find the programming books you need!</p>
          </div>
          <main>
            <Route path="/titles" component={Title} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
