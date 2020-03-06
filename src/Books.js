import React, { Component } from 'react';
import axios from 'axios';


// const url = 'http://localhost:3280/';

// class Books extends Component {
//     componentDidMount() {
//         const books = this.props.match.param.isbn;
//         const url = `${url}${Books}.json`
//         console.log(url)
//     }
//}
    axios.get('http://localhost:3000/books')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

export default Books;