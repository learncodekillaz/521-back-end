import React, { Component } from 'react'
import { Button } from 'reactstrap'
import EventCard from './EventCard'

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
                  <div key={index}>
                    <EventCard choice={choice} />
                  </div>
                )
            })}
        </ul>
      </div>
    )
  }
}
export default Event
