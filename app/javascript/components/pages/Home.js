import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Home extends Component {
    render() {
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
        </div>
      )
    }
}

export default Home
