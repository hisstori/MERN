import React, { Component } from 'react';
import './App';
// import axios from 'axios';
// import { render } from '@testing-library/react';
// const url = 'http://localhost:3000/';

class Books extends Component {
    constructor(props) {
      super(props);
      this.state = {
          data: null
      }
    }
     componentDidMount() {
         if (!this.state.data) {
             fetch('http://localhost:3280/books')
             .then(res => res.json())
             .then(res => {
                 this.setState({
                     data: res
                 }); 
                console.log(res);
         });
     }
     }
     render () {
        if (this.state.data) {
            let info = this.state.data.map(item => {
                return (
                    <div>
                        {item.title}
                    </div>
                );
            })
        return (
        <div>{info}</div>
        )};
    };
} 
  export default Books;