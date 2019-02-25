import React from "react";
import EventCard from "./EventCard";

export default class MovieChoices extends React.Component {
  constructor(props) {
    super(props);
  }
  selectMovie = e => {
    console.log("Success", e.target.innerText);
    this.setState({
      value: e.target.innerText
    });
  };

  render() {
    const { event } = this.props;
    const { choices } = this.props.event;
    const [current_user] = this.props.current_user;
    // console.log("event in MovieChoices: ", event);
    console.log("choices in MovieChoices: ", choices);
    // console.log("current_user in MovieChoices: ", current_user);
    const display_choice = Math.max(...choices.map(e => e.status));
    // console.log("display_choice in MovieChoices: ", display_choice);
    const newChoices = choices.filter(
      choice => choice.status >= display_choice
    );
    // console.log("newChoices in MovieChoices: ", newChoices);

    return (
      <div>
        <h3>Movie Choice Screen</h3>
        <h4>{event.event_name}</h4>
        {newChoices != undefined && (
          <ul className="event-container">
            {newChoices.map((choice, index) => {
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
