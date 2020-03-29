import React, { Component } from "react";

class New extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: "",
    //   categories: "",
    //   authors: "",
    //   imageSource: "",
    //   description: "",
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const data = (evt.target);

    fetch("https://infinite-fjord-09219.herokuapp.com/books/new", {
      method: "POST",
      data: {
        title: "",
        categories: "",
        authors: "",
        imageSource: "",
        description: ""
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 class="title">Add your favorite book!</h1>
        <div class="box">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                class="input"
                id="title"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Categories</label>
            <div class="control">
              <input
                class="input"
                id="categories"
                type="text"
                name="categories"
                placeholder="Categories"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Authors</label>
            <div class="control">
              <input
                class="input"
                id="authors"
                type="text"
                name="authors"
                placeholder="Authors"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Image Source</label>
            <div class="control">
              <input
                class="input"
                id="image source"
                type="text"
                name="image source"
                placeholder="Image Source"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea"
                id="description"
                type="text"
                name="description"
                placeholder="Description"
              ></textarea>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-success">Submit</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default New;
