import React, { Component } from 'react'
import { Button } from 'reactstrap'

import ChoiceCard from './ChoiceCard'
import Userdropdown from './Userdropdown'


class ChoicesTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      submittedCards: [],
      moviePairs: [],
      users: [],
      invitee : null,
      events: [],
      invitations: [],
      eventName: "",
      current_stage: "",
      choices_status: []
    }
  }
  getEventData = () => {
    fetch("/events.json")
    .then((response) => response.json())
    .then((events) => {
      this.setState({ events: events})
      console.log("events", events);
    })
  }
  getInvitationData = () => {
    fetch("/invited.json")
    .then((response) => response.json())
    .then((invitations) => {
      this.setState({ invitations: invitations })
      console.log("invitations", invitations);
    })
  }

  getUserData = () => {
    fetch("/users.json")
    .then((response) => response.json())
    .then((users) => {
      this.setState({ users: users })
      console.log("users",users);
    })
  }

  getMovieData = () => {
      const key = "e63bc4fcc5dfa1c7847d752867750f43";
      // const id = window.location.pathname.substring(7);

      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-12-31`
      )
        .then(response => {
          if (response.status !== 200) {
            console.log("Error: " + response.status);
            return;
          }
          response.json().then(data => {
            // const { moviePairs } = this.state;
            this.setState({ moviePairs: data.results });
            console.log("Movie Data", data.results);
          });
        })
        .catch(err => {
          console.log("Fetch Error :-S", err);
        });
    };

  componentDidMount() {
    this.getMovieData();
    this.getUserData();
    this.getEventData();
    this.getInvitationData();
  }


  selectUser = (user) => {
    this.setState({invitee: user})
  }
  cancelChoice = (choice) => {
    const { submittedCards, moviePairs } = this.state
    moviePairs.push(choice)
    submittedCards.splice(submittedCards.indexOf(choice), 1)

    this.setState({ submittedCards: submittedCards, moviePairs: moviePairs })
    console.log(this.state);
  }

  choiceSubmitted = (choice) => {
    const { submittedCards, moviePairs } = this.state
    submittedCards.push(choice)
    moviePairs.splice(moviePairs.indexOf(choice), 1)

    this.setState({ submittedCards: submittedCards, moviePairs: moviePairs })
    console.log(this.state);
  }

  handleClick = () => {
    const { submittedCards, invitee, events, users, current_stage, choices_status } = this.state
    console.log("SUMBIT SUCCESS!")
    // Submit information to Events table
    // Mapping through submittedCards array to assign the external API value (using the card param) to the choices_attributes keys
    const cards = submittedCards.map((card, i) => {
      return(
          {
            url: card.poster_path,
            choice_name: card.title,
            movie_id: card.id,
            overview: card.overview,
          }
      )
    })

    fetch('/events.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        event_name: "ccc",
        invitee_id: this.state.invitee.id,
        choices_attributes: cards
      })
    })
    console.log("RENDER:");
  }
  // Inside the body we are assigning the url value of cards to choices_attributes

  render() {

    const {events, invitations, moviePairs, users, submittedCards, invitee} = this.state
    console.log("Test", submittedCards)

    return(

      <div>
        {events.length > 0 &&
          <div>
            <h1>Your current events</h1>
            <ul>
              {events.map((event, index) => {
                return (
                  <li key={index}>{event.event_name}
                    <ul>
                      {event.choices.map((choice,index) =>{
                        return(
                          <li key={index}>{choice.choice_name}</li>
                        )
                      })}

                    </ul>
                  </li>
                )
              })}
            </ul>
        </div>
      }
      { invitations.length > 0 &&
        <div>
        <h1>Your current invitations</h1>
        <ul>
          {invitations.map((invitation, index) => {
            return (
              <li key={index}>{invitation.event_name}

              </li>

            )
          })}
        </ul>
        </div>
      }
        <div>
          <form>
            <label>
              Event Name:
              <input
                type="text"
                name="name"
              />
            </label>
            <input
              type="submit"
              value="Submit"
            />
          </form>
        </div>

        <h1>Choice</h1>
        <div className="card-list">
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
        </div>
        <div>
          <Userdropdown users={users} selectUser={this.selectUser} invitee={invitee} />
          <Button onClick={this.handleClick} >Submit</Button>
        </div>
      </div>
    );
  }
}

export default ChoicesTable
