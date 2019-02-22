import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Event extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {event} = this.props
    return(
      <div>
        {event.event_name}
          <ul>
            {event.choices.map((choice,index) =>{
              return(
                <li key={index}>{choice.choice_name}</li>
              )
            })}
        </ul>
      </div>
    )
  }
}
export default Event
