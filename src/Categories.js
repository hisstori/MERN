import React, { Component } from "react";
import "./App";
// import axios from 'axios';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    if (!this.state.data) {
      fetch("http://localhost:3280/categories/Python")
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
      let info = this.state.data.map(item => {
        return (
          <div>
            {item.title}, <img src={item.thumbnailUrl}/>, [{item.categories}]
          </div>
        );
      });
      return (
        <div>
        <div class="hero-body">
          <div class="container has-text-centered is-4">
            <div class="is-child box">
              <h1 class="info">{info}</h1>
            </div>
          </div>
        </div>
        <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active">
                <a>Java</a>
              </li>
              <li>
                <a>Python</a>
              </li>
              <li>
                <a>JavaScript</a>
              </li>
              <li>
                <a>Ruby</a>
              </li>
              <li>
                <a>Web Development</a>
              </li>
              <li>
                <a>Mobile</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      </div>
      );
    }
    return null;
  }
}

export default Categories;
