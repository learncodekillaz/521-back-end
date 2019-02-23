import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
} from "reactstrap";

class EventCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { choice } = this.props;
    const title = choice.choice_name.substring(0, 15) + "...";
    // console.log("Choices", choice);

    return (
      <div className="choice-card">
        <Card style={{ height: "310px" }}>
          <CardBody>
            <CardImg
              top
              width="30%"
              src={`https://image.tmdb.org/t/p/w200${choice.url}`}
              alt="Card image cap"
            />
            <CardTitle>{title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EventCard;
