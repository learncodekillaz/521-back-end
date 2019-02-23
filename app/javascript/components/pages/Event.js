import React, { Component } from "react";
import { Button } from "reactstrap";
import EventCard from "./EventCard";

class Event extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { event } = this.props;

    return (
      <div>
        <h3>{event.event_name}</h3>
        {event.choices != undefined && (
          <ul className="event-container">
            {event.choices.map((choice, index) => {
              return (
                <div className="event-item" key={index}>
                  <EventCard choice={choice} />
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
