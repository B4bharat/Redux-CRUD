import React, { Component } from "react";

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    };

    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            placeholder="Enter Post Title"
            ref={(input) => (this.getTitle = input)}
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            cols="28"
            ref={(input) => (this.getMessage = input)}
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
