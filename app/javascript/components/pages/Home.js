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
      current_user: "",
      event: "",
      cSelected: []
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

  selectChoices = (event) => {

    const {cSelected} = this.state;
    const {choices } = event
    console.log("Event Submitted", event);
    console.log("choices Submitted", choices);
    // Submit information to Events table
    // Mapping through submittedCards array to assign the external API value (using the card param) to the choices_attributes keys
    const cards = choices.map((card, i) => {
      return {
        // url: card.url,
        // choice_name: card.choice_name,
        // movie_id: card.movie_id,
        // overview: card.overview,
        status: cSelected.includes(card) ? card.status + 1 : card.status,
        id: card.id
      };
    });
    const current_stage = event.current_stage == "five_choices" ? "two_choices" : "final_choice"

    console.log("show", cards);

    fetch(`/events/${event.id}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

        // event_name: eventName,
        // id: event.invitee_id,
        // five_choices: five_choices,
        // two_choices: two_choices,
        // final_choice: final_choice,
        current_stage: current_stage,
        // event_type: event_type,
        choices_attributes: cards
      })
    })
    console.log("RENDER:");
    console.log("cards in fetch: ", cards)
  //   fetch("/invited.json", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       // event_name: eventName,
  //       // invitee_id: invitee.id,
  //       // five_choices: five_choices,
  //       // two_choices: two_choices,
  //       // final_choice: final_choice,
  //       current_stage: current_stage,
  //       // event_type: event_type,
  //       choices_attributes: cards
  //     })
  //   })
  //   console.log("RENDER:");
  };

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
    const { events, invitations, current_user } = this.state;
    const { current_stage } = this.state.events;
    // console.log("events: ", events);
    // console.log("invitations: ", invitations);
    // console.log("current_user : ", current_user);
    // console.log("current_stage: ", current_stage);

    return (
      <div className="authenticated-header">
            <h1>Welcome to 521 App</h1>
            <br />
            <div>
              {events.length > 0 && (
                <div style={{marginTop: "22vw"}}>
                  <h1>
                    <u>Your current events</u>
                  </h1>
                  {events.map((event, index) => {
                    return (
                      <div className="event-one" key={index}>
                        <Event
                          event={event}
                          check={event.current_stage == "two_choices" || false}
                          cSelected={this.state.cSelected}
                          onCheckboxBtnClick={this.onCheckboxBtnClick}
                        />
                        {event.current_stage != undefined &&
                          event.current_stage == "two_choices" && (
                            <div>
                              <Button onClick={()=>this.selectChoices(event)}>
                                Respond Event Choice
                              </Button>
                            </div>
                          )}
                        {event.current_stage == "five_choices" &&
                          <h3>Waiting for Response</h3>
                        }
                        {event.current_stage == "final_choice" &&
                          <h2>Congratulation!! You have match</h2>
                        }
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
                          cSelected={this.state.cSelected}
                          onCheckboxBtnClick={this.onCheckboxBtnClick}
                        />
                        {invitation.current_stage != undefined &&
                          invitation.current_stage == "five_choices" && (
                            <div>
                              <Button onClick={()=>this.selectChoices(invitation)}>
                                Respond Event Choice
                              </Button>
                            </div>
                          )}
                        {invitation.current_stage == "two_choices" && (
                          <h3>Waiting for Response</h3>
                        )}
                        {invitation.current_stage == "final_choice" && (
                          <h2>Congratulation!! You have match</h2>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
      </div>
    );
  }
}

export default Home;
