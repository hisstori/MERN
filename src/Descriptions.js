import React, { Component } from "react";
import "./App";
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import { render } from '@testing-library/react';


class Description extends Component {
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
      let info = this.state.data.map(item => {
        return <div>{item.title},<br/>
        {item.longDescription}</div>;
      });
      return <div>{info}</div>;
    }
    return null
  }
}
export default Description;
