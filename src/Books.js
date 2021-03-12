import React, { Component } from "react";
import "./App";
import TestBR from "./Test-burger";

class Books extends Component {
  render() {
    return (
      <div class="hero-body">
        <TestBR />
        {/* <p class="subtitle is-1">This is the homepage!
        Where you can find the programming books you need!</p> */}
      </div>
    );
  }
}

export default Books;