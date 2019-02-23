import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Event from './Event'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      invitations: [],
      two_choices: false,
      final_choice: false

  }
}
  componentDidMount = () => {
    this.getEventData()
    this.getInvitationData()
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
    render() {
      const { events, invitations } = this.state
      return(
        <div>
          {events.length > 0 &&
            <div>
              <h1>Your current events</h1>
              {events.map((event, index) => {
                return (
                  <div key={index}>
                    <Event event={event} />
                  </div>
                )
              })}
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
        </div>
      )
    }
}

export default Home
