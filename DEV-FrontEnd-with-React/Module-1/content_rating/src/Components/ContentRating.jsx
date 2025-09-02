import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      handlelikes: () => {
        this.setState((preState) => ({
          likes: preState.likes + 1
        }))
      },

      handledislikes: () => {
        this.setState((preState) => ({
          dislikes: preState.dislikes + 1
        }))
      }
    };
  }
  render() {
    return (
      <>
      <h1>Testing Like and Dislike buttons</h1>
      <div className="content-rating">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
          distinctio dolore repellendus commodi, molestiae ratione et, inventore
          qui natus dolorem suscipit possimus assumenda quaerat tempora
          sapiente? Dicta blanditiis, eligendi quos veniam quam laboriosam
          placeat quibusdam. Vero sint provident, vel doloremque velit autem,
          iste fuga repellendus veritatis, iusto cum quis.{" "}
        </p>

        <div className="rating-buttons">
          <button className="likes" onClick={this.state.handlelikes}>Likes ({this.state.likes})</button>

          <button className="dislikes" onClick={this.state.handledislikes}>Dislike ({this.state.dislikes})</button>
        </div>
      </div>
      </>
    );
  }
}

export default ContentRating;
