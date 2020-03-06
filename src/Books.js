import React from 'react';
import axios from 'axios';


const url = 'http://localhost:3280/';

class Books extends Component {
    state = {}

    componentDidMount() {
        const books = this.props.match.param.isbn;
        const url = `${url}${Books}.json`
        console.log(url)
    }
}
    axios.get('hhttp://localhost:3280/books')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

export default Books;