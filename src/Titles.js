import React, { Component } from "react";
import "./App";
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import { render } from '@testing-library/react';


// class Title extends Component {
//   componentDidMount() {
//     const url = 'http://localhost:3280/books';
//     console.log(url);

//     fetch(url)
//       .then(response => response.json())
//       .then(response => {
//         console.log(response)
//       })
//       .catch(err => {
//         console.error(err)
//       })
//   }
//   render() {
//     if (this.state.data) {
//       let info = this.state.data.map(item => {
//         return <div>{item.title}, [{item.categories}]</div>;
//       });
//       return <div>{info}</div>
//     }
//   }
// }

class Title extends Component {
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
        return <div>{item.title}, [{item.categories}]</div>;
      });
      return <div>{info}</div>;
    }
    return null
  }
}
export default Title;