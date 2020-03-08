import React, { Component } from "react";
import "./App";
import "./App.css"
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
      fetch("http://localhost:3280/")
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
        return <div> key={item.id}
            <img src={item.thumbnailUrl} alt={item.title} />
            <div>{item.title}</div>
          </div>
      });
      return <div className="gridBase">{Home}</div>;
    }
    return null;
  }
}

export default Home;
