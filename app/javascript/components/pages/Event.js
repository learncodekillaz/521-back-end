import React, { Component } from "react";
import { Button } from "reactstrap";
import EventCard from "./EventCard";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { cSelected: [] };
  }
  onCheckboxBtnClick = selected => {
    const { cSelected } = this.state;
    console.log("cSelected in EventCard: ", cSelected);
    console.log("selected in EventCard: ", selected);
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...cSelected] });
    console.log("cSelected: ", cSelected);
  };

  render() {
    const { event, check } = this.props;
    const cSelected = this.state;
    // const { choices } = this.props;
    // console.log("choices in Event: ", choices);
    console.log("check in Event: ", check);
    console.log("event.choices in Event: ", event.choices);
    const display_choice = Math.max(...event.choices.map(e => e.status));
    const newChoices = event.choices.filter(
      choice => choice.status >= display_choice
    );

    return (
      <div>
        <h3>{event.event_name}</h3>
        {newChoices != undefined && (
          <ul className="event-container">
            {newChoices.map((choice, index) => {
              return (
                <div className="event-item" key={index}>
                  <EventCard
                    choice={choice}
                    check={check}
                    cSelected={cSelected}
                    onCheckboxBtnClick={this.onCheckboxBtnClick}
                  />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
export default Event;
