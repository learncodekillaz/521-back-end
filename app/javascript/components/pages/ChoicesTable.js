import React, { Component } from 'react'
import { Button } from 'reactstrap'

import ChoiceCard from './ChoiceCard'

class ChoicesTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submittedCards: [],
      moviePairs: [
        {
          title: "Pulp Fiction",
          genre: "Drama",
          description: "hello, having fun"
        },
        {
          title: "Happy Gilmore",
          genre: "Comedy",
          description: "Golfer"
        },
        {
          title: "The Matrix",
          genre: "Action",
          description: "crazy stuff"
        },
        {
          title: "The Departed",
          genre: "Drama",
          description: "cool movie"
        },
        {
          title: "Fast & Furious",
          genre: "Action",
          description: "fast cars"
        }
      ]
    }
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
