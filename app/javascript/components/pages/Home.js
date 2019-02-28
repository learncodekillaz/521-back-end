import React, { Component } from "react";
import { Button } from "reactstrap";
import Event from "./Event";
import { Parallax, Background } from "react-parallax";
import MovieChoies from "./MovieChoices";
import { Redirect } from "react-router-dom"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      events: [],
      invitations: [],
      current_user: "",
      event: "",
      cSelected: [],
      responseOk: false
    };
  }
  componentDidMount = () => {
    this.getEventData()
    this.getInvitationData()
    this.getCurrentUserData();
  };

  getEventData = () => {
    // console.log("eventsxx: ");
    fetch("/events.json")
      .then(response => response.json())
      .then(events => {
        console.log("events from get : ", events);
        this.setState({
          events: events
      });
    });
  };

  refreshEvent = e => this.setState({events: e})

  getInvitationData = () => {
    // console.log("invitationsxx: ");
    fetch("/invited.json")
      .then(response => response.json())
      .then(invitations => {
        console.log("invitations from get : ", invitations);
        this.setState({
          invitations: invitations
      });
    });
  };

  refreshInvitation = e => this.setState({invitations: e})


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

    const {
      cSelected
    } = this.state;
    const {choices } = event;
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
        current_stage: current_stage,
        choices_attributes: cards
      })
    })
    .then((response)=>{
      if (response.status == 200) {
        this.getEventData()
        this.getInvitationData()
      }
      })
  };



  onCheckboxBtnClick = (selected, maxLimit) => {
    const { cSelected, disabled } = this.state;
    console.log("cSelected in EventCard: ", cSelected);
    console.log("selected in EventCard: ", selected);
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    console.log('maxLimit', maxLimit)
    console.log('cSelected', cSelected.length)
    console.log('disabled', disabled)
    if (cSelected.length >= maxLimit){
      this.setState({
        disabled: !this.state.disabled
      })
      console.log('disabled AFTER', disabled)
    }
    this.setState({ cSelected: [...cSelected] });
    console.log("cSelected: ", cSelected);
  };

  render() {
    const { events, invitations, current_user, disabled } = this.state;
    const { current_stage } = this.state.events;
    // console.log("events: ", events);
    // console.log("invitations: ", invitations);
    // console.log("current_user : ", current_user);
    // console.log("current_stage: ", current_stage);

    return (
      <div>
      <div className="authenticated-header">
            <h1>Welcome to 521 App</h1>
            <br />
              {events.length > 0 && (
                <div>
                  <h1>
                    <u style={{color: "#add8e6"}}>Your Current Events</u>
                  </h1>
                  {events.map((event, index) => {
                    return (
                      <div className="event-one" key={index}>
                        <Event
                          disabled={disabled}
                          event={event}
                          check={event.current_stage == "two_choices" || false}
                          cSelected={this.state.cSelected}
                          onCheckboxBtnClick={this.onCheckboxBtnClick}
                        />
                        {event.current_stage != undefined &&
                          event.current_stage == "two_choices" && (
                            <div>
                              <Button onClick={()=>this.selectChoices(event)}>
                                Please Respond to Event Choice
                              </Button>
                            </div>
                          )}
                        {event.current_stage == "five_choices" &&
                          <h3>Waiting for Response</h3>
                        }
                        {event.current_stage == "final_choice" &&
                          <h2>Congratulation!! You Have a Match! Don't be a Flake!</h2>
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
                  <h1>
                    <u style={{color: "#d6f2eb"}}>Your Current Invitations</u>
                  </h1>
                  {invitations.map((invitation, index) => {
                    return (
                      <div className="event-two" key={index}>
                        <Event
                          disabled={disabled}
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
                                Please Respond to Event Choice
                              </Button>
                            </div>
                          )}
                        {invitation.current_stage == "two_choices" && (
                          <h3>Waiting for Response</h3>
                        )}
                        {invitation.current_stage == "final_choice" && (
                          <h2>Congratulation!! You Have a Match! Don't be a Flake!</h2>
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
