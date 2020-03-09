import React, { Component } from "react";
// import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    if (!this.state.data) {
      fetch("http://localhost:3280/books")
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
          <div class="hero-body">
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Highest Rated</p>
                <p class="subtitle">Click to read more</p>
                <div class="columns">
                  <div class="column">
                    <figure class="image">
                      <img src={item.thumbnailUrl} alt="Logo"/>
                    </figure>
                    {item.title}
                  </div>
                  <div class="column">
                    <figure class="image">
                      <img src={item.thumbnailUrl} alt="Logo" />
                    </figure>
                    {item.title}
                  </div>
                  <div class="column">
                    <figure class="image">
                      <img src={item.thumbnailUrl} alt="Logo" />
                    </figure>
                    {item.title}
                  </div>
                  <div class="column">
                    <figure class="image">
                      <img src="" alt="Logo" />
                    </figure>
                    Fourth column
                  </div>
                  <div class="column">
                    <figure class="image">
                      <img src="" alt="Logo" />
                    </figure>
                    Fifth column
                  </div>
                </div>
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
export default Home;
