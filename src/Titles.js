import React, { Component } from "react";
import "./App";
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import { render } from '@testing-library/react';

class Book extends Component {
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
          <div class="hero-body box">
            <div class="tile is-ancestor box">
              {/* <div class="tile is-6 is-vertical is-parent"> */}
                <div class="tile is-child">
                    <article class="tile is-child notification is-primary">
                      <p class="title">{item.title}</p>
                      <p class="subtitle">
                        {item.categories[0]},<br/>{item.categories[1]}
                      </p>
                    </article>
                    <article class="tile is-child notification is-warning">
                      <p class="title">Authors</p>
                      <p class="subtitle">
                        {item.authors[0]},<br/>{item.authors[1]}
                      </p>
                    </article>
                    </div>
                    {/* <div class="tile is-parent is-vertical"> */}
                      <article class="tile is-child notification is-white">
                        <figure class="image is-4by4">
                          <img src={item.thumbnailUrl}/>
                        </figure>
                      </article>
                    {/* </div> */}
                {/* </div> */}
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
      return (
        // <div class="hero-body">
        //   <div class="container has-text-centered is-4">
        //     <div class="is-child box">
        //     <h1 class="info">{info[1]}</h1>
        //     </div>
        //   </div>
        // </div>
        //=========================//
        // <div class="hero-body">
        //   <div class="tile is-ancestor is-centered box">
        //     <div class="tile is-vertical is-8">
        //       <div class="tile">
        //         <div class="tile is-parent is-vertical">
        //           <article class="tile is-child notification is-primary">
        //             <p class="title">Title</p>
        //             <p class="subtitle">{[18].title}</p>
        //           </article>
        //           <article class="tile is-child notification is-warning">
        //             <p class="title">...tiles</p>
        //             <p class="subtitle">Bottom tile</p>
        //           </article>
        //         </div>
        //         <div class="tile is-parent">
        //           <article class="tile is-child notification is-info">
        //             <p class="title">Middle tile</p>
        //             <p class="subtitle">With an image</p>
        //             <figure class="image is-4by3">
        //               <img src="https://bulma.io/images/placeholders/640x480.png" />
        //             </figure>
        //           </article>
        //         </div>
        //       </div>
        //       <div class="tile is-parent">
        //         <article class="tile is-child notification is-danger">
        //           <p class="title">Wide tile</p>
        //           <p class="subtitle">Aligned with the right tile</p>
        //           <div class="content"></div>
        //         </article>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div>{info[0]}</div>
      );
    }
    return null;
  }
}
export default Book;
