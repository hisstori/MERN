import React, { Component } from 'react';
// import axios from 'axios';
// import { render } from '@testing-library/react';
// const url = 'http://localhost:3000/';

class Books extends Component {
    constructor(props) {
      super(props);
    }
    state = {
      data: null
    };
    componentDidMount() {
      console.log('component did mount');
      fetch('http://localhost:3000/')
        .then(res => {
          res
            .json()
            .then(res => console.log(res))
            .then(
              (this.setState = {
                data: res
              })
            );
        })
        .catch(err => {
          console.log(err);
        });
    }
    render() {
        if (this.state = )
      return (
        <div>
          <h2>Data</h2>
        </div>
      );
    }
  }
  export default Books;