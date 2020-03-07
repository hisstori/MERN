import React, { Component } from 'react';
import './App';
import axios from 'axios';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: null
         };
    }
    componentDidMount() {
        if (!this.state.data) {
            axios("http://localhost:3280/categories/:java")
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
                return <div>[{item.categories[0].java}]</div>;
            });
            return <div>{info}</div>;
        }
        return null
    }
}
 
export default Categories;