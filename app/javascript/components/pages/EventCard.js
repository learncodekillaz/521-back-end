import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
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
    const { choice, cSelected, check, disabled, newChoices } = this.props;
    const maxLimit = Math.floor(newChoices.length/2)
    // const title = choice.choice_name.substring(0, 15) + "...";
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
            {check && (
              <div>
                <p>Checkbox Buttons</p>
                <label>
                  <input
                    id="checkbox"
                    type="checkbox"
                    disabled={disabled}
                    onChange={() => this.props.onCheckboxBtnClick(choice, maxLimit)}
                  />
                  &nbsp; Click Me
                </label>
                &nbsp;&nbsp;
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EventCard;
