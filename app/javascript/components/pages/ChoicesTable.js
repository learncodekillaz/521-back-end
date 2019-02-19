import React, { Component } from 'react'
import { Button } from 'reactstrap'

import ChoiceCard from './ChoiceCard'

class ChoicesTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submittedCards: [],
      moviePairs: []
    }
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
            const { moviePairs } = this.state;
            this.setState({ moviePairs: data.results });
            // console.log("Movie Data", data.results);
          });
        })
        .catch(err => {
          console.log("Fetch Error :-S", err);
        });
    };

    componentDidMount() {
  this.getMovieData();
}
  choiceSubmitted = (choice) => {
    const { submittedCards } = this.state
    submittedCards.push(choice)
    this.setState({submittedCards: submittedCards})
    console.log(this.state);
  }
  tableSubmitted = () =>{
    const { submittedCards } = this.state
    console.log(submittedCards)
  }
  render() {
    const {moviePairs} = this.state
    return(
      <div>
        <h1>Choice</h1>
        <div className="card-list">
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} />
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} />
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} />
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} />
          <ChoiceCard moviePairs = {moviePairs} choiceSubmitted = {this.choiceSubmitted} />
        </div>
        <Button onClick = {this.tableSubmitted}>Submit</Button>
      </div>
    )
  }
}

export default ChoicesTable
