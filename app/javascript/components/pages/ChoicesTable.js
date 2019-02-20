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
      selectedUser: []
    }
  }

  getUserData = () => {
    fetch("/users.json")
    .then((response) => response.json())
    .then((users) => {
      this.setState({ users: users})
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
}

  selectUser = (u) => {
    const { selectedUser } = this.state
    selectedUser.push(u)
    this.setState({selectedUser: selectedUser})
  }

  cancelChoice = (choice) => {
    const { submittedCards, moviePairs } = this.state
    moviePairs.push(choice)
    submittedCards.splice(submittedCards.indexOf(choice), 1)

    this.setState({submittedCards: submittedCards, moviePairs: moviePairs})
    console.log(this.state);
  }

  choiceSubmitted = (choice) => {
    const { submittedCards, moviePairs } = this.state
    submittedCards.push(choice)
    moviePairs.splice(moviePairs.indexOf(choice), 1)

    this.setState({submittedCards: submittedCards, moviePairs: moviePairs})
    console.log(this.state);
  }
  tableSubmitted = () =>{
    const { submittedCards } = this.state
    console.log(submittedCards)
  }
  render() {
    const {moviePairs, users} = this.state
    return(
      <div>
        <h1>Choice</h1>
        <div className="card-list">
          <ChoiceCard id="1" moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
          <ChoiceCard id="2" moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
          <ChoiceCard id="3" moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
          <ChoiceCard id="4" moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
          <ChoiceCard id="5" moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} cancelChoice = {this.cancelChoice} />
        </div>
        <Button onClick = {this.tableSubmitted}>Submit</Button>
        <div>
        <Userdropdown users={users} />
        </div>
      </div>
    )
  }
}

export default ChoicesTable
