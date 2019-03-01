import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import question_mark_default from "../../images/question_mark_default.png";

class CardImage extends Component {
  displayImage() {
    const { selectedMovie } = this.props;
    // console.log("selectedMovie in CardImage: ", selectedMovie);
    if (!selectedMovie || selectedMovie.poster_path == null) {
      return question_mark_default;
    } else {
      return `https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`;
    }
  }
  render() {
    return (
      <CardImg
        className="card-image"
        src={this.displayImage()}
        alt="Card image cap"
      />
    );
  }
}

export default CardImage;
