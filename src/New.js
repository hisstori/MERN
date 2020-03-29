import React, { Component } from "react";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    if (!this.state.data) {
      fetch("https://infinite-fjord-09219.herokuapp.com/books/new")
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
              <input class="input" type="text" placeholder="Title" />
            </div>
          </div>

          <div class="field">
            <label class="label">Categories</label>
            <div class="control">
              <input class="input" type="text" placeholder="Categories" />
            </div>
          </div>

          <div class="field">
            <label class="label">Authors</label>
            <div class="control">
              <input class="input" type="text" placeholder="Authors" />
            </div>
          </div>

          <div class="field">
            <label class="label">Image Source</label>
            <div class="control">
              <input class="input" type="text" placeholder="Image Source" />
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" placeholder="Description"></textarea>
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
