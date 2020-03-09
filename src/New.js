import React, { Component } from "react";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    if (!this.state.data) {
      fetch("http://localhost:3280/books/new")
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
    return (
      <div>
        <h1 class="title">Add your favorite book!</h1>
        <div class="box">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div class="field">
            <label class="label">Categories</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div class="field">
            <label class="label">Authors</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div class="field">
            <label class="label">Image Link</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" placeholder="Text area"></textarea>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-success">Submit</button>
            </div>
            <div class="control">
              <button class="button is-danger is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default New;
