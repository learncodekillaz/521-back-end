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
    // console.log("event in EventCard", event);

    return (
      <div className="choice-card">
        <Card>
          <CardBody>
            <CardImg
              top
              height="20%"
              src={`https://image.tmdb.org/t/p/w200${choice.url}`}
              alt="Card image cap"
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EventCard;
