import React, { Component } from "react";
import "./App";

class Programming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    if (!this.state.data) {
      fetch("http://localhost:8000/categories/Programming")
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
      let info = this.state.data.slice(0,24).map(item => {
        return (
          <div class="hero-body is-danger box">
            <div class="tile is-ancestor box">
              <div class="tile is-8 is-vertical is-parent">
                <article class="tile is-child notification is-black">
                  Title:
                  <p class="title">{item.title}</p>
                  <br />
                  Category:
                  <p class="subtitle">
                    {item.categories[0]},<br />
                    {item.categories[1]}
                  </p>
                </article>
                <article class="tile is-child notification is-black">
                  <p class="title">Authors</p>
                  <br />
                  <p class="subtitle">
                    {item.authors[0]},<br />
                    {item.authors[1]}
                  </p>
                </article>
              </div>
              <article class="tile is-child image is-2by1">
                <img src={item.thumbnailUrl} />
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger">
                <p class="title">About this book...</p>
                <div class="content">{item.longDescription}</div>
              </article>
            </div>
          </div>
        );
      });
      return <div>{info}</div>;
    }
    return null;
  }
}

export default Programming;
