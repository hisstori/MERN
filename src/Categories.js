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
            {item.title}, [{item.categories}]
          </div>
        );
      });
      return (
        <div class="hero-body">
          <div class="container has-text-centered is-4">
            <div class="is-child box">
              <h1 class="info">{info[0]}</h1>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Categories;
