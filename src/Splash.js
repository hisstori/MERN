import React, { Component } from "react";
import "./App";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    if (!this.state.data) {
      fetch("https://infinite-fjord-09219.herokuapp.com") 
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res
          });
          console.log(res);
        });
    }
  }
  render() {
    if (this.state.data) {
      let info = this.state.data.slice(227, 240).map(item => {
        return (
          <div class="hero-body">
            <div class="tile is-ancestor">
              <div class="tile is-4 is-vertical is-parent is">
                <div class="tile is-child">
                  <p class="subtitle is-1">Browse hundreds of books!</p>
                  <p>
                    Browse by category of programming language or browse the
                    full library at once.
                  </p>
                </div>
                <div class="tile is-child">
                  <p class="subtitle is-1">Add your favorite book!</p>
                  <p>!==Feature currently under construction==!</p>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child">
                  <p class="subtitle is-1">Books of Programming API</p>
                  <p>
                    Hello, I created this fun little API to help programmers
                    find more resources for learning code and various
                    programming techniques. The basic functions are available
                    and I do plan to update with more patches. This will be an
                    ongoing project of mine and I hope you stay tuned and watch
                    it grow. The most immediate updates planned are a search
                    bar, and the ability for users to share their favorite books
                    by adding them to the database!
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
      return <div>{info[0]}</div>;
    }
    return null;
  }
}

export default Splash;
