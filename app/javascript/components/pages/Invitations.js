import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Redirect, Link } from "react-router-dom"


class Invitations extends Component {
  constructor(props){
    super(props)
    this.state = {
      cardAttributes: {
        title: '',
        genre: '',
        userId: ''
      }
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    fetch('/choicecards.json', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ choicecard:this.state.cardAttributes })
    })
    .then((respponse)=>{
      this.setState({responseOK: true})
    })
  }

  handleChange = (event) => {
    const { cardAttributes } = this.state
    cardAttributes[event.target.name] = event.target.value
    this.setState({ cardAttributes: cardAttributes})
  }
    render() {
      const { cardAttributes, responseOK } = this.state
      return(
        <div>
        {responseOK &&
          <Redirect to="/choices_table" />
        }
        {!responseOK &&
          <div>

          <h1>Create Invitation</h1>
            <form
            onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type='text'
              name='title'
              value={cardAttributes.title}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="genre">Genre</label>
            <input
              type='text'
              name='genre'
              value={cardAttributes.genre}
              onChange={this.handleChange}
            />
            </form>
            </div>
          }
        </div>
      )
    }
}

export default Invitations
