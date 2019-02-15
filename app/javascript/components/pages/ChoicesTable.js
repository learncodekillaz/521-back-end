import React, { Component } from 'react'
import { Button } from 'reactstrap'

import ChoiceCard from './ChoiceCard'

class ChoicesTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
  render() {
    const {moviePairs} = this.state
    return(
      <div>
        <h1>Choice</h1>
        <div className="card-list">
          <ChoiceCard moviePairs = {moviePairs} />
          <ChoiceCard moviePairs = {moviePairs} />
          <ChoiceCard moviePairs = {moviePairs} />
          <ChoiceCard moviePairs = {moviePairs} />
          <ChoiceCard moviePairs = {moviePairs} />
        </div>
      </div>
    )
  }
}

export default ChoicesTable
