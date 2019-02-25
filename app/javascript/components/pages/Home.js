import React, { Component } from "react";
import { Button } from "reactstrap";
import Event from "./Event";
import { Parallax, Background } from "react-parallax";
import MovieChoies from "./MovieChoices";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      invitations: [],
      current_user: ""
    };
  }
  componentDidMount = () => {
    this.getEventData();
    this.getInvitationData();
    this.getCurrentUserData();
  };
  getEventData = () => {
    fetch("/events.json")
      .then(response => response.json())
      .then(events => {
        this.setState({
          events: events
        });
        // const [event] = events;
        // console.log("events", events);
        // console.log("current_stage", event.current_stage);
      });
  };
  getInvitationData = () => {
    fetch("/invited.json")
      .then(response => response.json())
      .then(invitations => {
        this.setState({ invitations: invitations });
        // console.log("invitations", invitations);
      });
  };
  getCurrentUserData = () => {
    fetch("/inviter.json")
      .then(response => response.json())
      .then(inviter => {
        this.setState({ current_user: inviter });
        // console.log("inviter in get: ", inviter);
        // console.log("inviter in get: ", inviter[0].id);
      });
  };
  render() {
    const { events, invitations, current_user } = this.state;
    const { current_stage } = this.state.events;
    console.log("events: ", events);
    console.log("current_user : ", current_user);
    console.log("current_stage: ", current_stage);

    return (
      <div className="authenticated-header">
        <Parallax
          bgImage={require("../../images/movie.jpeg")}
          bgImageAlt="the dog"
          // strength={-200}
        >
          <div>
            <h1>Welcome to 521 App</h1>
            <br />
            <div>
              {events.length > 0 && (
                <div>
                  <h1 style={{ color: "crimson" }}>
                    <u>Your current events</u>
                  </h1>
                  {events.map((event, index) => {
                    return (
                      <div className="event-one" key={index}>
                        <Event
                          event={event}
                          check={event.current_stage == "two_choices" || false}
                        />
                        {event.current_stage != undefined &&
                          event.current_stage == "two_choices" && (
                            <div>
                              <Button onClick={this.handleClick}>
                                Respond Event Choice
                              </Button>
                            </div>
                          )}
                        {event.current_stage != "two_choices" && (
                          <h2>Waiting for Response</h2>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              <br />
              <br />
              {invitations.length > 0 && (
                <div>
                  <h1 style={{ color: "yellow" }}>
                    <u>Your current invitations</u>
                  </h1>
                  {invitations.map((invitation, index) => {
                    return (
                      <div className="event-two" key={index}>
                        <Event
                          event={invitation}
                          check={
                            invitation.current_stage == "five_choices" || false
                          }
                        />
                        {invitation.current_stage != undefined &&
                          invitation.current_stage == "five_choices" && (
                            <div>
                              <Button onClick={this.handleClick}>
                                Respond Event Choice
                              </Button>
                            </div>
                          )}
                        {invitation.current_stage != "five_choices" && (
                          <h2>Waiting for Response</h2>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div style={{ height: "400px" }} />
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Home;
