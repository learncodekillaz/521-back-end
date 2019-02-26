
import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'


import CardBuilder from "./CardBuilder";
import Userdropdown from "./Userdropdown";

class ChoicesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseOk: false,
      submittedCards: [],
      moviePairs: [],
      users: [],
      responseOk: false,
      inviter: "",
      invitee: null,
      five_choices: false,
      two_choices: false,
      final_choice: false,
      event_type: "movie",
      current_stage: "five_choices",
      eventName: "Movie night with",
      choices_status: 1
    };

  }



  getUserData = () => {
    fetch("/users.json")
      .then(response => response.json())
      .then(users => {
        this.setState({ users: users });
        console.log("users in get", users);
      });
  };

  getInviterData = () => {
    fetch("/inviter.json")
      .then(response => response.json())
      .then(inviter => {
        this.setState({ inviter: inviter });
        console.log("inviter in get: ", inviter);
        // console.log("inviter in get: ", inviter[0].id);
      });
  };

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
    this.getInviterData();
  }

  selectUser = user => {
    const {inviter} = this.props

    this.setState({
      invitee: user,
      eventName: "Movie date with " + user.first_name
    });
  };
  cancelChoice = choice => {
    const { submittedCards, moviePairs } = this.state;
    moviePairs.push(choice);
    submittedCards.splice(submittedCards.indexOf(choice), 1);

    this.setState({ submittedCards: submittedCards, moviePairs: moviePairs });
    console.log("this.state in cancelChoice: ", this.state);
  };

  choiceSubmitted = choice => {
    const { submittedCards, moviePairs } = this.state;
    submittedCards.push(choice);
    moviePairs.splice(moviePairs.indexOf(choice), 1);

    this.setState({ submittedCards: submittedCards, moviePairs: moviePairs });
    console.log(this.state);
  };

  // Submit information to Events table
  handleClick = () => {
    const {
      responseOk,
      eventName,
      submittedCards,
      invitee,
      users,
      five_choices,
      two_choices,
      final_choice,
      current_stage,
      choices_status,
      event_type,
    } = this.state;
    console.log("SUMBIT SUCCESS!");
    // Submit information to Events table

    // Mapping through submittedCards array to assign the external API value (using the card param) to the choices_attributes keys
    const cards = submittedCards.map((card, i) => {
      return {
        url: card.poster_path,
        choice_name: card.title,
        movie_id: card.id,
        overview: card.overview,
        status: choices_status
      };
    });
    console.log("show", cards);

    fetch("/events.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event_name: eventName,
        invitee_id: invitee.id,
        five_choices: five_choices,
        two_choices: two_choices,
        final_choice: final_choice,
        current_stage: current_stage,
        event_type: event_type,
        choices_attributes: cards
      })

    })
    .then((response) => {
      this.setState({responseOk: true})
    })

    console.log("RENDER:");
  };
  // Inside the body we are assigning the url value of cards to choices_attributes
  handleEventNameChange = e => {
    this.setState({ eventName: e.target.value });
  };

  render() {
    const { moviePairs, users, inviter, invitee, eventName, responseOk } = this.state;

    return(

      <div>
        {responseOk &&
          <Redirect to='/' />}
        <h1>Choice</h1>
        <div className="flex-container">
          <CardBuilder
            moviePairs={moviePairs}
            choiceSubmitted={this.choiceSubmitted}
            cancelChoice={this.cancelChoice}
          />
          <CardBuilder
            moviePairs={moviePairs}
            choiceSubmitted={this.choiceSubmitted}
            cancelChoice={this.cancelChoice}
          />
          <CardBuilder
            moviePairs={moviePairs}
            choiceSubmitted={this.choiceSubmitted}
            cancelChoice={this.cancelChoice}
          />
          <CardBuilder
            moviePairs={moviePairs}
            choiceSubmitted={this.choiceSubmitted}
            cancelChoice={this.cancelChoice}
          />
          <CardBuilder
            moviePairs={moviePairs}
            choiceSubmitted={this.choiceSubmitted}
            cancelChoice={this.cancelChoice}
          />
        </div>
        <div>
          <Userdropdown
            users={users}
            inviter={inviter}
            selectUser={this.selectUser}
            invitee={invitee}
          />
        </div>
        <div>
          <label>
            Event Name:
            <input
              type="text"
              name="name"
              value={eventName}
              onChange={this.handleEventNameChange}
            />
          </label>
          <Button onClick={this.handleClick}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default ChoicesTable;
